from .global_inventory.inventory import global_inventory_inventory_bp
from .miami_inventory.inventory import miami_inventory_inventory_bp
from .montreal_inventory.inventory import montreal_inventory_inventory_bp
from .aar_inventory.inventory import aar_inventory_inventory_bp

all_inventory_blueprints = {
    "global_inventory": {
        "inventory": global_inventory_inventory_bp,
        # "stock": global_inventory_stock_bp
    },
    "miami_inventory": {
        "inventory": miami_inventory_inventory_bp,
    },
    "montreal_inventory": {
        "inventory": montreal_inventory_inventory_bp,
    },
    "aar_inventory": {
        "inventory": aar_inventory_inventory_bp,
    },
}