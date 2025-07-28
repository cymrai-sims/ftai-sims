import logging
from flask import jsonify

logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)  

def fetch_inventory(table_name):
    try:
        inventory = table_name.query.all()
        data = []

        for record in inventory:
            logger.debug(f"Raw record: {record}")
            record_dict = record.to_dict()
            logger.debug(f"Converted to dict: {record_dict}")
            data.append(record_dict)

        logger.info(f"Successfully fetched {len(data)} records.")
        return jsonify({"status": "success", "data": data})

    except Exception as e:
        logger.exception("Error occurred while fetching inventory")  
        return jsonify({"status": "error", "error": "An internal error occurred."}), 500
