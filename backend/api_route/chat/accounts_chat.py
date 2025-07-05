from flask import Blueprint, request, jsonify

accounts_chat_bp = Blueprint('accounts_chat', __name__)

@accounts_chat_bp.route("", methods=["GET"])
def handle_accounts_chat():
    return "llm(response)"
  