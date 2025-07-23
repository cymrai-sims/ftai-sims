import os
from flask import Flask, jsonify
from dotenv import load_dotenv
from sqlalchemy import text
from flask_cors import CORS
from api_route.api_blueprint_registry import register_all_blueprints_v1

load_dotenv()

#from models import db, Inventories
from models import db, Inventory
from api_route.api_blueprint_registry import register_all_blueprints_v1
from urllib.parse import quote_plus
 
load_dotenv()
 
app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"])
 
 
# Build SQLAlchemy URI
driver = os.getenv('DB_DRIVER')
server = os.getenv('DB_SERVER')
database = os.getenv('DB_NAME')
trusted_connection = os.getenv('DB_TRUSTED_CONNECTION', 'yes')
 
odbc_str = f"DRIVER={{{driver}}};SERVER={server};DATABASE={database};Trusted_Connection={trusted_connection}"
connection_uri = f"mssql+pyodbc:///?odbc_connect={quote_plus(odbc_str)}"
 
# Flask config
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
app.config['SQLALCHEMY_DATABASE_URI'] = connection_uri
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = os.getenv('SQLALCHEMY_TRACK_MODIFICATIONS', 'False') == 'True'
 
# Register Blueprints
register_all_blueprints_v1(app)

# Initialize database
db.init_app(app)
 
# Test Routes
@app.route('/', methods=['GET'])
def home():
    return "Flask server is running!"

# Get Inventory Data
@app.route('/api/v1/inventory', methods=['GET'])
def get_inventories():
    try:
        inventory = Inventory.query.limit(100).all()
        data = []
        for r in inventory:
            print("Raw record:", r)
            d = r.to_dict()
            print("Converted:", d)
            data.append(d)
        return jsonify({"status": "success", "data": data})
    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({"status": "error", "error": str(e)}), 500


# Test database connection
@app.route('/api/v1/db-test', methods=['GET'])
def test_db_connection():
    try:
        with app.app_context():
            result = db.session.execute(text("SELECT GETDATE();"))
            current_time = result.scalar()
        return jsonify({'db_time': str(current_time)})
    except Exception as e:
        return jsonify({'error': str(e)}), 500
 
# Run server
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)