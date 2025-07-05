from flask import Blueprint

procurement_chat_bp = Blueprint('procurement_chat', __name__)

@procurement_chat_bp.route("", methods=["GET"])
def handle_procurement_chat():
    return "procurement chat is running!"
