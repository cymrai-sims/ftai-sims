from flask import Blueprint ,request, jsonify
from llm_module import all_models

inventory_chat_bp = Blueprint('inventory_chat', __name__)
inventory_insight_bp = Blueprint('inventory_insight', __name__)

models=all_models()

@inventory_chat_bp.route("", methods=["POST"])
def handle_inventory_chat():
    data = request.get_json()  
    message = data.get('message', '')
    page = data.get('page','')
    session_id = data.get('session_id', '')
    #model_name=data.get('model_name', '')
    model_name='local_ollama' #gemini

    if not all([message, session_id, page]):
        return jsonify({"reply": "Missing message, session_id, or page"}), 400
    try:
        reply = models[model_name].generate_llm_response(page, session_id, message)
        return jsonify({"reply": reply})
    except Exception as e:
        return jsonify({"reply": f"Error: {str(e)}"}), 500

    # response_text = f"'{page}' Received your message: '{message}' in session {session_id}"
    # return jsonify({"reply": response_text})



@inventory_insight_bp.route("", methods=["POST"])
def handle_inventory_insight():
    data = request.get_json()  
    message = data.get('message', '')
    page = data.get('page','')
    model_name='local_ollama'
    if not all([message, page]):
        return jsonify( "Missing message, or page")
    try:
        reply = models[model_name].get_insight(page, message)
        print(reply)
        return jsonify({"reply": reply})
    except Exception as e:
        return jsonify({"reply": f"Error: {str(e)}"}), 500
        return jsonify({"reply": f"Error: {str(e)}"}), 500
