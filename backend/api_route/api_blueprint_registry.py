from api_route.chat import (

#chat 
    #accounts_chat_bp,
    dashboard_chat_bp,
    inventory_chat_bp,
    #maintenance_chat_bp,
    procurement_chat_bp,
    #requisitions_chat_bp,
    #support_chat_bp,
## Insight
    #accounts_insight_bp,
    dashboard_insight_bp,
    inventory_insight_bp,
    #maintenance_insight_bp,
    procurement_insight_bp,
    #requisitions_insight_bp,
    #support_insight_bp,


)

def register_all_blueprints_v1(app):

##Chatbot
    #app.register_blueprint(accounts_chat_bp, url_prefix="/api/v1/chat/accounts")
    app.register_blueprint(dashboard_chat_bp, url_prefix="/api/v1/chat/dashboard")
    app.register_blueprint(inventory_chat_bp, url_prefix="/api/v1/chat/inventory")
    #app.register_blueprint(maintenance_chat_bp, url_prefix="/api/v1/chat/maintenance")
    app.register_blueprint(procurement_chat_bp, url_prefix="/api/v1/chat/procurement")
    #app.register_blueprint(requisitions_chat_bp, url_prefix="/api/v1/chat/requisitions")
    #app.register_blueprint(support_chat_bp, url_prefix="/api/v1/chat/support")

## Insight 

   #app.register_blueprint(accounts_insight_bp, url_prefix="/api/v1/insight/accounts")
    app.register_blueprint(dashboard_insight_bp, url_prefix="/api/v1/insight/dashboard")
    app.register_blueprint(inventory_insight_bp, url_prefix="/api/v1/insight/inventory")
    #app.register_blueprint(maintenance_insight_bp, url_prefix="/api/v1/insight/maintenance")
    app.register_blueprint(procurement_insight_bp, url_prefix="/api/v1/insight/procurement")
    #app.register_blueprint(requisitions_insight_bp, url_prefix="/api/v1/insight/requisitions")
   # app.register_blueprint(support_insight_bp, url_prefix="/api/v1/insight/support")