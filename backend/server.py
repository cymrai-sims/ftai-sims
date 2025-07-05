import os
from flask import Flask, jsonify
from dotenv import load_dotenv
#from sqlalchemy import text

from api_route.api_blueprint_registry import register_all_blueprints_v1


load_dotenv()

#from models import db, Inventories

app = Flask(__name__)

# Configurations from .env
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('SQLALCHEMY_DATABASE_URI')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = os.getenv('SQLALCHEMY_TRACK_MODIFICATIONS', 'False') == 'True'

register_all_blueprints_v1(app)


# Initialize database
#db.init_app(app)






# Test Routes
@app.route('/', methods=['GET'])
def home():
    return "Flask server is running!"

# Fetch inventories
@app.route('/api/inventories', methods=['GET'])
def get_inventories():
    try:
        with app.app_context():
            inventories = Inventories.query.limit(100).all()
            data = [r.to_dict() for r in inventories]
        return jsonify({"status": "success", "data": data})
    except Exception as e:
        return jsonify({"status": "error", "error": str(e)}), 500

# Test database connection
@app.route('/api/db-test', methods=['GET'])
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