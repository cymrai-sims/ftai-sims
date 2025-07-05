import os
import base64
import pandas as pd
import pygame
import tkinter as tk
from tkinter import filedialog
from google import genai
from google.genai import types

# === SETUP ===
pygame.init()
WIDTH, HEIGHT = 800, 600
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("CSV QA with Gemini")
font = pygame.font.Font(None, 28)

input_box = pygame.Rect(20, HEIGHT - 40, 600, 32)
button_box = pygame.Rect(640, HEIGHT - 40, 120, 32)

input_text = ""
chat_log = []
conversation_history = []
csv_bytes = None
csv_pending_upload = False

# === Gemini Setup ===
client = genai.Client(api_key="AIzaSyDTb0uPjkk3LEgNnoHofNs5_Jquo6iQ4EQ")
model = "gemini-2.0-flash"

# === Upload CSV ===
def upload_csv():
    global csv_bytes, csv_pending_upload
    root = tk.Tk()
    root.withdraw()
    file_path = filedialog.askopenfilename(filetypes=[("CSV Files", "*.csv")])
    if file_path:
        with open(file_path, "rb") as f:
            csv_bytes = f.read()
        csv_pending_upload = True
        add_to_chat("System", f"CSV loaded: {os.path.basename(file_path)}")

# === Send Prompt to Gemini ===
def ask_gemini(user_input):
    global csv_pending_upload
    user_parts = []

    if csv_pending_upload and csv_bytes:
        user_parts.append(types.Part.from_bytes(mime_type="text/csv", data=csv_bytes))
        csv_pending_upload = False

    user_parts.append(types.Part(text=user_input))  # ✅ Use constructor

    conversation = conversation_history.copy()
    conversation.append(types.Content(role="user", parts=user_parts))

    config = types.GenerateContentConfig(response_mime_type="text/plain")

    response_text = ""
    for chunk in client.models.generate_content_stream(
        model=model,
        contents=conversation,
        config=config,
    ):
        response_text += chunk.text

    # Append both user and model response to history
    conversation_history.append(types.Content(role="user", parts=[types.Part(text=user_input)]))
    conversation_history.append(types.Content(role="model", parts=[types.Part(text=response_text)]))

    add_to_chat("You", user_input)
    add_to_chat("Gemini", response_text)


# === Chat Log Display ===
def add_to_chat(sender, text):
    chat_log.append((sender, text))
    if len(chat_log) > 30:
        chat_log.pop(0)

def draw_ui():
    screen.fill((255, 255, 255))
    y = 10
    for sender, msg in chat_log[-30:]:
        for line in msg.split("\n"):
            txt = font.render(f"{sender}: {line}", True, (0, 0, 0))
            screen.blit(txt, (20, y))
            y += 22

    pygame.draw.rect(screen, (200, 200, 200), input_box, 2)
    pygame.draw.rect(screen, (100, 200, 100), button_box)
    button_text = font.render("Send", True, (255, 255, 255))
    screen.blit(button_text, (button_box.x + 30, button_box.y + 5))

    input_render = font.render(input_text, True, (0, 0, 0))
    screen.blit(input_render, (input_box.x + 5, input_box.y + 5))

    upload_hint = font.render("[U] Upload CSV anytime", True, (0, 0, 255))
    screen.blit(upload_hint, (WIDTH - 300, 10))

    pygame.display.flip()

# === Main Loop ===
running = True
while running:
    draw_ui()
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

        elif event.type == pygame.KEYDOWN:
            if event.key == pygame.K_RETURN:
                if input_text.strip():
                    ask_gemini(input_text.strip())
                    input_text = ""
            elif event.key == pygame.K_BACKSPACE:
                input_text = input_text[:-1]
            elif event.key == pygame.K_u:
                upload_csv()
            else:
                input_text += event.unicode

        elif event.type == pygame.MOUSEBUTTONDOWN:
            if button_box.collidepoint(event.pos):
                if input_text.strip():
                    ask_gemini(input_text.strip())
                    input_text = ""

pygame.quit()
