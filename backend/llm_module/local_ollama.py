import ollama 
from ollama import chat
from llm_module.cnvHistory import add_message, get_history
import os
from llm_module.llm_prompt import get_prompt
from dotenv import load_dotenv

load_dotenv()
model = os.environ.get("OLLAMA_MODEL")

def build_ollama_messages(page, session_id):
    messages = get_history(page, session_id)
    return [
        {
            "role": "assistant" if msg["role"] == "model" else "user",
            "content": msg["content"]
        }
        for msg in messages
    ]

def generate_llm_response(page, session_id, user_input):
    add_message(page, session_id, "user", user_input)
    messages = build_ollama_messages(page, session_id)
    ai_type='chat'
    role='admin'
    
    prompt = get_prompt(page, ai_type, role)
    system_message = {"role": "system", "content": prompt}
    messages.insert(0, system_message)
    print(messages)

    response = chat(
        model=model,
        messages=messages,
        stream=False,  
    )

    response_text = response['message']['content']
    add_message(page, session_id, "assistant", response_text)
    return model+' : '+response_text



def get_insight(page, user_input):
    messages = [{"role": "user", "content": user_input}]
    ai_type='insight'
    role='admin'
    
    prompt = get_prompt(page, ai_type, role)
    system_message = {"role": "system", "content": prompt}
    messages.insert(0, system_message)

    response = chat(
            model=model,
            messages=messages,
            stream=False,  
        )

    response_text = response['message']['content']
    return model+' : '+response_text

