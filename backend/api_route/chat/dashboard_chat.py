from flask import Blueprint

dashboard_chat_bp = Blueprint('dashboard_chat', __name__)

@dashboard_chat_bp.route("", methods=["GET"])
def handle_dashboard_chat():
    return "dashboard chat is running!"
