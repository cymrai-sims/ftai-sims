from flask import Blueprint
from database_connection.sql_connection import fetch_inventory
from models import Miami

miami_inventory_inventory_bp = Blueprint('miami_inventory_inventory', __name__)

@miami_inventory_inventory_bp.route("", methods=["GET"])
def miami_inventory_inventory():
    return fetch_inventory(Miami)