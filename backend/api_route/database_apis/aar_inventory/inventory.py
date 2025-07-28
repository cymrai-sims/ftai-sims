from flask import Blueprint
from database_connection.sql_connection import fetch_inventory
from models import AAR

aar_inventory_inventory_bp = Blueprint('aar_inventory_inventory', __name__)

@aar_inventory_inventory_bp.route("", methods=["GET"])
def aar_inventory_inventory():
    return fetch_inventory(AAR)