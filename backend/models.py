from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import String, Integer, DateTime, Numeric

db = SQLAlchemy()
# Define the Inventory model

class Inventory(db.Model):
    __tablename__ = 'Inventory'

    Part_Number = db.Column(String(100), primary_key=True)
    Part_Description = db.Column(String(255))
    Quantity_On_Hand = db.Column(Integer)
    Available_Quantity = db.Column(Integer)
    Reserved_Quantity = db.Column(Integer)
    Unit_Cost = db.Column(Numeric(18, 2))
    Total_Stock_Value = db.Column(Numeric(18, 2))
    Condition = db.Column(String(50))
    Location = db.Column(String(100))
    Warehouse = db.Column(String(100))
    Serial_Number = db.Column(String(100))
    Received_Date = db.Column(DateTime)
    Purchase_Order_Number = db.Column(String(100))
    Repair_Order_Number = db.Column(String(100))
    Source = db.Column(String(100))
    Stock_Line = db.Column(String(100))
    Ctrl_Number = db.Column(String(100))
    Ctrl_Id = db.Column(String(100))
    Receiver_Number = db.Column(String(100))
    Stock_Category_Code = db.Column(String(100))
    Reserved = db.Column(String(100))
    Days_Since_Rec = db.Column(Integer)
    Geo_Code = db.Column(String(100))
    Work_Order = db.Column(String(100))
    Reserve_Date = db.Column(DateTime)
    FieldPt_Print_Date = db.Column(DateTime)
    Mat_Group = db.Column(String(100))
    Type = db.Column(String(100))
    Mat_Sub_Group = db.Column(String(100))
    Mat_Sub_Group_Description = db.Column(String(255))
    Country_Of_Manufacturer = db.Column(String(100))
    Manufacturer = db.Column(String(100))
    Ata_Pos_Ref = db.Column(String(100))
    Ata_Ref = db.Column(String(100))
    Ata_Description = db.Column(String(255))
    Part_Group = db.Column(String(100))
    Price_Date = db.Column(DateTime)
    Home_Lp = db.Column(Numeric(18, 2))
    Mfg_Lp_Usd = db.Column(Numeric(18, 2))
    Nsn_Num = db.Column(String(100))
    Mat_Group_1 = db.Column(String(100))
    Dangerous_G = db.Column(String(50))

    def to_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}

class Montreal(db.Model):
    __tablename__ = 'Montreal'

    Part_Number = db.Column(db.String(100), primary_key=True)
    Part_Description = db.Column(db.String(255))
    Stock_Line = db.Column(db.String(50))
    Ctrl_Number = db.Column(db.String(50))
    Ctrl_Id = db.Column(db.String(50))
    Receiver_Number = db.Column(db.String(100))
    Quantity_On_Hand = db.Column(db.Integer)
    Available_Quantity = db.Column(db.Integer)
    Reserved_Quantity = db.Column(db.Integer)
    Unit_Cost = db.Column(db.Numeric(18, 2))
    Total_Stock_Value = db.Column(db.Numeric(18, 2))
    Stock_Category_Code = db.Column(db.String(50))
    Condition = db.Column(db.String(50))
    Serial_Number = db.Column(db.String(100))
    Shelf_Life = db.Column(db.String(50))
    Location = db.Column(db.String(100))
    Warehouse = db.Column(db.String(100))
    Reserved = db.Column(db.String(10))
    Days_Since_Rec = db.Column(db.Integer)
    Received_Date = db.Column(db.DateTime)
    Geo_Code = db.Column(db.String(50))
    Repair_Order_Number = db.Column(db.String(100))
    Purchase_Order_Number = db.Column(db.String(100))
    Work_Order = db.Column(db.String(100))
    Reserve_Date = db.Column(db.DateTime)
    FieldPt_Print_Date = db.Column(db.DateTime)
    Mat_Group = db.Column(db.String(50))
    Type = db.Column(db.String(50))
    Mat_Sub_Group = db.Column(db.String(50))
    Mat_Sub_Group_Description = db.Column(db.String(255))
    Country_Of_Manufacturer = db.Column(db.String(100))
    Ata_Pos_Ref = db.Column(db.String(50))
    Manufacturer = db.Column(db.String(100))
    Ata_Ref = db.Column(db.String(50))
    Ata_Description = db.Column(db.String(255))
    Part_Group = db.Column(db.String(50))
    Price_Date = db.Column(db.DateTime)
    Home_Lp = db.Column(db.Numeric(18, 2))
    Mfg_Lp_Usd = db.Column(db.Numeric(18, 2))
    Nsn_Num = db.Column(db.String(100))
    MaterialGroup = db.Column(db.String(50))
    Stock_Unit = db.Column(db.String(50))
    Dangerous_G = db.Column(db.String(10))

    def to_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}

class Miami(db.Model):
    __tablename__ = 'Miami'

    Part_Number = db.Column(String(100), primary_key=True)
    Part_Description = db.Column(String(255))
    Stock_Line = db.Column(String(50))
    Ctrl_Number = db.Column(String(50))
    Ctrl_Id = db.Column(String(50))
    Receiver_Number = db.Column(String(100))
    Quantity_On_Hand = db.Column(Integer)
    Available_Quantity = db.Column(Integer)
    Reserved_Quantity = db.Column(Integer)
    Unit_Cost = db.Column(Numeric(18, 2))
    Total_Stock_Value = db.Column(Numeric(18, 2))
    Stock_Category_Code = db.Column(String(50))
    Condition = db.Column(String(50))
    Serial_Number = db.Column(String(100))
    SHELF_LIFE = db.Column(String(50))
    Location = db.Column(String(100))
    Warehouse = db.Column(String(100))
    Reserved = db.Column(String(10))
    Days_Since_Rec = db.Column(Integer)
    Received_Date = db.Column(DateTime)
    Geo_Code = db.Column(String(50))
    Repair_Order_Number = db.Column(String(100))
    Purchase_Order_Number = db.Column(String(100))
    Work_Order = db.Column(String(100))
    Reserve_Date = db.Column(DateTime)
    FieldPt_Print_Date = db.Column(DateTime)
    Mat_Group = db.Column(String(50))
    Type = db.Column(String(50))
    Mat_Sub_Group = db.Column(String(50))
    Mat_Sub_Group_Description = db.Column(String(255))
    Country_Of_Manufacturer = db.Column(String(100))
    Ata_Pos_Ref = db.Column(String(50))
    Manufacturer = db.Column(String(100))
    Ata_Ref = db.Column(String(50))
    Ata_Description = db.Column(String(255))
    Pn_Group = db.Column(String(50))
    Price_Date = db.Column(DateTime)
    Home_Lp = db.Column(Numeric(18, 2))
    Mfg_Lp_Usd = db.Column(Numeric(18, 2))
    Nsn_Num = db.Column(String(100))
    Mat_Group_1 = db.Column(String(50))
    Stock_Unit = db.Column(String(50))
    Dangerous_G = db.Column(String(10))

    def to_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}
    

class Aar(db.Model):
    __tablename__ = 'Aar'

    DESCRIPTION = db.Column(db.String(100), primary_key=True)
    PN_GROUP = db.Column(db.String(255))
    MAT_GROUP_1 = db.Column(db.String(255))
    QTY_AVAILABLE = db.Column(db.Integer)
    LOCATION = db.Column(db.String(255))

    def to_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}