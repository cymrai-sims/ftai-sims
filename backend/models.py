from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# Define the Inventory model

class Inventory(db.Model):
    __tablename__ = 'Inventory'

    Part_Number = db.Column(db.String(100), primary_key=True)
    Part_Description = db.Column(db.String(255))
    Quantity_On_Hand = db.Column(db.Integer)
    Available_Quantity = db.Column(db.Integer)
    Reserved_Quantity = db.Column(db.Integer)
    Unit_Cost = db.Column(db.Numeric(18, 2))
    Total_Stock_Value = db.Column(db.Numeric(18, 2))
    Condition = db.Column(db.String(50))
    Location = db.Column(db.String(100))
    Warehouse = db.Column(db.String(100))
    Serial_Number = db.Column(db.String(100))
    Received_Date = db.Column(db.DateTime)
    Purchase_Order_Number = db.Column(db.String(100))
    Repair_Order_Number = db.Column(db.String(100))
    Unit_Of_Measure = db.Column(db.String(50))
    Source = db.Column(db.String(100))

    def to_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}

class Montreal(db.Model):
    __tablename__ = 'Montreal'

    Part_Number = db.Column(db.String(100), primary_key=True)
    Part_Description = db.Column(db.String(255))
    Quantity_On_Hand = db.Column(db.Integer)
    Available_Quantity = db.Column(db.Integer)
    Reserved_Quantity = db.Column(db.Integer)
    Unit_Cost = db.Column(db.Numeric(18, 2))
    Total_Stock_Value = db.Column(db.Numeric(18, 2))
    Condition = db.Column(db.String(50))
    Location = db.Column(db.String(100))
    Warehouse = db.Column(db.String(100))
    Serial_Number = db.Column(db.String(100))
    Received_Date = db.Column(db.DateTime)
    Purchase_Order_Number = db.Column(db.String(100))
    Repair_Order_Number = db.Column(db.String(100))
    Unit_Of_Measure = db.Column(db.String(50))
    Source = db.Column(db.String(100))

    def to_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}

class Miami(db.Model):
    __tablename__ = 'Miami'

    Part_Number = db.Column(db.String(100), primary_key=True)
    Part_Description = db.Column(db.String(255))
    Quantity_On_Hand = db.Column(db.Integer)
    Available_Quantity = db.Column(db.Integer)
    Reserved_Quantity = db.Column(db.Integer)
    Unit_Cost = db.Column(db.Numeric(18, 2))
    Total_Stock_Value = db.Column(db.Numeric(18, 2))
    Condition = db.Column(db.String(50))
    Location = db.Column(db.String(100))
    Warehouse = db.Column(db.String(100))
    Serial_Number = db.Column(db.String(100))
    Received_Date = db.Column(db.DateTime)
    Purchase_Order_Number = db.Column(db.String(100))
    Repair_Order_Number = db.Column(db.String(100))
    Unit_Of_Measure = db.Column(db.String(50))
    Source = db.Column(db.String(100))

    def to_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}
    

class AAR(db.Model):
    __tablename__ = 'AAR'

    Part_Number = db.Column(db.String(100), primary_key=True)
    Part_Description = db.Column(db.String(255))
    Quantity_On_Hand = db.Column(db.Integer)
    Available_Quantity = db.Column(db.Integer)
    Reserved_Quantity = db.Column(db.Integer)
    Unit_Cost = db.Column(db.Numeric(18, 2))
    Total_Stock_Value = db.Column(db.Numeric(18, 2))
    Condition = db.Column(db.String(50))
    Location = db.Column(db.String(100))
    Warehouse = db.Column(db.String(100))
    Serial_Number = db.Column(db.String(100))
    Received_Date = db.Column(db.DateTime)
    Purchase_Order_Number = db.Column(db.String(100))
    Repair_Order_Number = db.Column(db.String(100))
    Unit_Of_Measure = db.Column(db.String(50))
    Source = db.Column(db.String(100))

    def to_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}