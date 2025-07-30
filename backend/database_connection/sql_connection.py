
import logging
from flask import request, jsonify

logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)

def fetch_inventory(table_name):
    try:
        # Get the columns parameter from the query string
        columns_param = request.args.get('columns', 'all')
        requested_columns = columns_param.split(',') if columns_param != 'all' else None

        inventory = table_name.query.all()
        data = []

        for record in inventory:
            full_record = record.to_dict()
            logger.debug(f"Full record: {full_record}")

            if requested_columns:
                filtered_record = {key: full_record[key] for key in requested_columns if key in full_record}
            else:
                filtered_record = full_record

            logger.debug(f"Filtered record: {filtered_record}")
            data.append(filtered_record)

        logger.info(f"Successfully fetched {len(data)} records with columns: {requested_columns or 'all'}")
        return jsonify({"status": "success", "data": data})

    except Exception as e:
        logger.exception("Error occurred while fetching inventory")
        return jsonify({"status": "error", "error": "An internal error in sql_connection.py occurred."}), 500


#! old code without any column filtering 

# import logging
# from flask import jsonify

# logger = logging.getLogger(__name__)
# logger.setLevel(logging.INFO)  

# def fetch_inventory(table_name):
#     try:
#         inventory = table_name.query.all()
#         data = []

#         for record in inventory:
#             logger.debug(f"Raw record: {record}")
#             record_dict = record.to_dict()
#             logger.debug(f"Converted to dict: {record_dict}")
#             data.append(record_dict)

#         logger.info(f"Successfully fetched {len(data)} records.")
#         return jsonify({"status": "success", "data": data})

#     except Exception as e:
#         logger.exception("Error occurred while fetching inventory")  
#         return jsonify({"status": "error", "error": "An internal error occurred."}), 500