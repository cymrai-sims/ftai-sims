from flask import Blueprint,request, jsonify
from llm_module import generate_llm_response, get_insight
procurement_chat_bp = Blueprint('procurement_chat', __name__)
procurement_insight_bp = Blueprint('procurement_insight', __name__)

@procurement_chat_bp.route("", methods=["POST"])
def handle_procurement_chat():
    data = request.get_json()  
    message = data.get('message', '')
    page = data.get('page','')
    session_id = data.get('session_id', '')
    if not all([message, session_id, page]):
        return jsonify({"reply": "Missing message, session_id, or page"}), 400
    try:
        reply = generate_llm_response(page, session_id, message)
        return jsonify({"reply": reply})
    except Exception as e:
        return jsonify({"reply": f"Error: {str(e)}"}), 500

    # response_text = f"'{page}' Received your message: '{message}' in session {session_id}"
    # return jsonify({"reply": response_text})
@procurement_insight_bp.route("", methods=["POST"])
def handle_procurement_insight():
    data = request.get_json()  
    message = data.get('message', '')
    page = data.get('page','')
    if not all([message, page]):
        return jsonify( "Missing message, or page")
    try:
        reply = get_insight(page, message)
        print(reply)
        return jsonify({"reply": reply})
    except Exception as e:
        return jsonify({"reply": f"Error: {str(e)}"}), 500