from api_route.ai_apis import ai_blueprint_map
from api_route.database_apis import all_inventory_blueprints

from api_route.database_apis.global_inventory.inventory import global_inventory_inventory_bp
def register_all_ai_blueprints_v1(app):
    for name, types in ai_blueprint_map.items():
        app.register_blueprint(types["chat"], url_prefix=f"/api/v1/chat/{name}")
        app.register_blueprint(types["insight"], url_prefix=f"/api/v1/insight/{name}")

def register_all_inventory_blueprints_v1(app):
    base_prefix = "/api/v1"
    for location, modules in all_inventory_blueprints.items():
        for module_name, blueprint in modules.items():
            url_prefix = f"{base_prefix}/{location}/{module_name}"
      
            app.register_blueprint(blueprint, url_prefix=url_prefix)

def register_all_blueprints_v1(app):
    register_all_ai_blueprints_v1(app)
    register_all_inventory_blueprints_v1(app)

