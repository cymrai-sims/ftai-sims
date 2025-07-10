import os
from google import genai
from google.genai import types
from llm_module.cnvHistory import add_message, get_history
from llm_module.llm_prompt import get_prompt
from dotenv import load_dotenv

load_dotenv()

client = genai.Client(api_key=os.environ.get("GEMINI_API_KEY"))
model = os.environ.get("GEMINI_MODEL")

def build_gemini_contents(page, session_id):
    messages = get_history(page, session_id)
    return [
        types.Content(
            role="model" if msg["role"] == "assistant" else msg["role"],
            parts=[types.Part.from_text(text=msg["content"])]
        )
        for msg in messages
    ]
def generate_llm_response(page, session_id, user_input):
    add_message(page, session_id, "user", user_input)
    contents = build_gemini_contents(page, session_id)
    ai_type='chat'
    role='admin'
    
    prompt = get_prompt(page, ai_type, role)

    config = types.GenerateContentConfig(
        response_mime_type="text/plain",
        system_instruction=[types.Part.from_text(text=prompt)],
    )

    response_text = ""
    for chunk in client.models.generate_content_stream(
        model=model,
        contents=contents,
        config=config,
    ):
        if chunk.text:
            response_text += chunk.text

    add_message(page, session_id, "model", response_text)
    return model+' : '+response_text

def get_insight(page, user_input):
    contents = [
        types.Content(
            role="user",
            parts=[
                types.Part.from_text(text=user_input),
            ],
        ),
    ]
    ai_type='insight'
    role='admin'
    
    prompt = get_prompt(page, ai_type, role)

    config = types.GenerateContentConfig(
        response_mime_type="text/plain",
        system_instruction=[types.Part.from_text(text=prompt)],
    )

    response_text = ""
    for chunk in client.models.generate_content_stream(
        model=model,
        contents=contents,
        config=config,
    ):
        if chunk.text:
            response_text += chunk.text

    return model+' : '+response_text