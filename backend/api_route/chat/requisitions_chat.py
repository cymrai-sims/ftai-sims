from flask import Blueprint

requisitions_chat_bp = Blueprint('requisitions_chat', __name__)

@requisitions_chat_bp.route("", methods=["GET"])
def handle_requisitions_chat():
    return "requisitions chat is running!"
