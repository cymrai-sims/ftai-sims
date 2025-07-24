from flask import Blueprint
from database_connection.sql_connection import fetch_inventory
from models import Montreal

montreal_inventory_inventory_bp = Blueprint('montreal_inventory_inventory', __name__)

@montreal_inventory_inventory_bp.route("", methods=["GET"])
def montreal_inventory_inventory():
    return fetch_inventory(Montreal)