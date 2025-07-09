from flask import Blueprint ,request, jsonify
import traceback
from llm_module import generate_llm_response, get_insight
requisitions_chat_bp = Blueprint('requisitions_chat', __name__)
requisitions_insight_bp = Blueprint('requisitions_insight', __name__)

@requisitions_chat_bp.route("", methods=["POST"])
def handle_requisitions_chat():
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
@requisitions_insight_bp.route("", methods=["POST"])
def handle_requisitions_insight():
    data = request.get_json()  
    message = data.get('message', '')
    page = data.get('page','')

    if not all([message, page]):
        return jsonify({"error": "Missing message or page"}), 400

    try:
        reply = get_insight(page, message)
        return jsonify({"reply": reply})
    except Exception as e:
        print("Exception in get_insight():", e)
        traceback.print_exc()  # <---- This prints full traceback to terminal
        return jsonify({"error": f"Internal server error: {str(e)}"}), 500