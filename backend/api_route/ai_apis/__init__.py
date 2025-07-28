
from .dashboard_chat import dashboard_chat_bp,dashboard_insight_bp
from .inventory_chat import inventory_chat_bp, inventory_insight_bp


# Centralized mapping
ai_blueprint_map = {
    "inventory": {
        "chat": inventory_chat_bp,
        "insight": inventory_insight_bp
    },
    "dashboard": {
        "chat": dashboard_chat_bp,
        "insight": dashboard_insight_bp
    }

}
