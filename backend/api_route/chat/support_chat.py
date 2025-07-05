from flask import Blueprint

support_chat_bp = Blueprint('support_chat', __name__)

@support_chat_bp.route("", methods=["GET"])
def handle_support_chat():
    return "support chat is running!"
