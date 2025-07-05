from api_route.chat import (
    accounts_chat_bp,
    dashboard_chat_bp,
    inventory_chat_bp,
    maintenance_chat_bp,
    procurement_chat_bp,
    requisitions_chat_bp,
    support_chat_bp,
)

def register_all_blueprints_v1(app):
    app.register_blueprint(accounts_chat_bp, url_prefix="/api/v1/chat/accounts")
    app.register_blueprint(dashboard_chat_bp, url_prefix="/api/v1/chat/dashboard")
    app.register_blueprint(inventory_chat_bp, url_prefix="/api/v1/chat/inventory")
    app.register_blueprint(maintenance_chat_bp, url_prefix="/api/v1/chat/maintenance")
    app.register_blueprint(procurement_chat_bp, url_prefix="/api/v1/chat/procurement")
    app.register_blueprint(requisitions_chat_bp, url_prefix="/api/v1/chat/requisitions")
    app.register_blueprint(support_chat_bp, url_prefix="/api/v1/chat/support")
