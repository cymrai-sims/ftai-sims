from flask import Blueprint

maintenance_chat_bp = Blueprint('maintenance_chat', __name__)

@maintenance_chat_bp.route("", methods=["GET"])
def handle_maintenance_chat():
    return "maintenance chat is running!"
