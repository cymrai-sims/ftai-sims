from flask import Blueprint
from database_connection.sql_connection import fetch_inventory
global_inventory_inventory_bp = Blueprint('global_inventory_inventory', __name__)
from models import  Inventory

@global_inventory_inventory_bp.route("", methods=["GET"])
def global_inventory_inventory():
    return fetch_inventory(Inventory)