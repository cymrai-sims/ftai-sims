from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# Define the Inventory model
class Inventory(db.Model):
    __tablename__ = ''

    # id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    DESCRIPTION = db.Column(db.String(255), primary_key=True)
    STOCK_LINE = db.Column(db.String(50))
    CTRL_NUMBER = db.Column(db.String(50))
    CTRL_ID = db.Column(db.String(50))
    RECEIVER_NUMBER = db.Column(db.String(50))
    QTY_OH = db.Column(db.Integer)
    QTY_AVAILABLE = db.Column(db.Integer)
    QTY_RESERVED = db.Column(db.Integer)
    UNIT_COST = db.Column(db.Numeric(18,2))
    EXT_COST = db.Column(db.Numeric(18,2))
    STOCK_CATEGORY_CODE = db.Column(db.String(50))
    Condition = db.Column('Condition', db.String(50))
    SERIAL_NUMBER = db.Column(db.String(100))
    SHELF_LIFE = db.Column(db.Integer)
    LOCATION_CODE = db.Column(db.String(50))
    WAREHOUSE_CODE = db.Column(db.String(50))
    RESERVED = db.Column(db.String(10))
    DAYS_SINCE_REC = db.Column(db.Integer)
    REC_DATE = db.Column(db.String(50))
    GEO_CODE = db.Column(db.String(50))
    RO_NUMBER = db.Column(db.String(50))
    PO_NUMBER = db.Column(db.String(50))
    WORK_ORDER = db.Column(db.String(50))
    RESERVE_DATE = db.Column(db.String(50))
    PT_PRINT_DATE = db.Column(db.String(50))
    MAT_GROUP = db.Column(db.String(50))
    TYPE = db.Column(db.String(50))
    MAT_SUB_GROUP = db.Column(db.String(50))
    MAT_SUB_GROUP_DESCR = db.Column(db.String(255))
    COUNTRY_OF_MANUFACTURER = db.Column(db.String(100))
    ATA_POS_REF = db.Column(db.String(50))
    MANUFACTURER = db.Column(db.String(100))
    ATA_REF = db.Column(db.String(50))
    ATA_DESC = db.Column(db.String(255))
    PartGroup = db.Column(db.String(50))
    PRICE_DATE = db.Column(db.String(50))
    HOME_LP = db.Column(db.String(50))
    MFG_LP_USD = db.Column(db.Numeric(18,2))
    NSN_NUM = db.Column(db.String(50))
    MaterialGroup = db.Column(db.String(50))
    STOCK_UNIT = db.Column(db.String(20))
    DANGEROUS_G = db.Column(db.String(10))

    def to_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}