from llm_module.cnvHistory import add_message, get_history
import os 
from openai import AzureOpenAI 
from llm_module.llm_prompt import get_prompt
from dotenv import load_dotenv
import sys
import traceback
load_dotenv()
deployment = os.environ.get("OPENAI_DEPLOYMENT")
api_version = os.environ.get("OPENAI_API_VERSION")
api_key= os.environ.get("OPENAI_API_KEY")
endpoint= os.environ.get("OPENAI_ENDPOINT")
max_completion_token = int(os.environ.get("OPENAI_MAX_COMPLETION_TOKENS"))
temperature = float(os.environ.get("OPENAI_TEMPERATURE"))
top_p =float(os.environ.get("OPENAI_TOP_P"))


client = AzureOpenAI(     
    api_version=api_version,     
    azure_endpoint=endpoint,     
    api_key=api_key, 
) 

def build_openai_messages(page, session_id):
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
    messages = build_openai_messages(page, session_id)
    ai_type='chat'
    role='admin'
    page='dashboard'
    
    prompt = get_prompt(page, ai_type, role)
    system_message = {"role": "system", "content": prompt}
    messages.insert(0, system_message)
#     print(messages)

    response = client.chat.completions.create(    
        messages=messages,
        max_completion_tokens=max_completion_token,     
        temperature=temperature,     
        top_p=top_p,      
        model=deployment
            ) 

    response_text = response.choices[0].message.content
    add_message(page, session_id, "assistant", response_text)
    return  deployment+' : '+response_text 
    #return messages



def get_insight(page, user_input):
    messages = [{"role": "user", "content": user_input}]
    ai_type='insight'
    role='admin'
    page='dashboard'

    prompt = get_prompt(page, ai_type, role)
    system_message = {"role": "system", "content": prompt}
    messages.insert(0, system_message)

    print(f"inside Message: {messages}, Page: {page}", file=sys.stderr)

    
    try:
        response = client.chat.completions.create(
            messages=messages,
            max_completion_tokens=max_completion_token,
            temperature=temperature,
            top_p=top_p,
            model=deployment
        )
        print(f"response: {response}, Page: {page}", file=sys.stderr)

        response_text = response.choices[0].message.content
        return response_text

    except Exception as e:
        print("Exception occurred in get_insight:", file=sys.stderr)
        traceback.print_exc(file=sys.stderr)
        # Option 1: Return an error string as response
        return f"Error occurred in AI call: {str(e)}"

