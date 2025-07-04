import pyodbc

conn_str = (
    "DRIVER={ODBC Driver 17 for SQL Server};"
    "SERVER=URINRIN\\MSSQLSERVER01;"
    "DATABASE=MyDB;"
    "UID=urinrino;"
    "PWD=thisPass901"
)

try:
    with pyodbc.connect(conn_str) as conn:
        print("Connection successful!")
except Exception as e:
    print("Error:", e)