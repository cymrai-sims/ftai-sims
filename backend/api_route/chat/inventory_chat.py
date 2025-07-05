from flask import Blueprint

inventory_chat_bp = Blueprint('inventory_chat', __name__)

@inventory_chat_bp.route("", methods=["GET"])
def handle_inventory_chat():
    return "inventory chat is running!"




