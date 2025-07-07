from flask import request, jsonify
from llm_module import generate_llm_response
message = 'hi how are you?'
page = 'inventory'
session_id = '12345'

reply = generate_llm_response(page, session_id, message)
print(reply)
