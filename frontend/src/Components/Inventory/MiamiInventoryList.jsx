import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

// Table columns (update to match your Miami model fields)
const columns = [
  {
    name: "Part Number",
    selector: (row) => row.Part_Number,
    sortable: true,
    wrap: true,
  },
  {
    name: "Part Description",
    selector: (row) => row.Part_Description,
    sortable: true,
    wrap: true,
  },
  {
    name: "Stock Line",
    selector: (row) => row.Stock_Line,
    sortable: true,
    wrap: true,
  },
  {
    name: "Ctrl Number",
    selector: (row) => row.Ctrl_Number,
    sortable: true,
    wrap: true,
  },
  {
    name: "Ctrl Id",
    selector: (row) => row.Ctrl_Id,
    sortable: true,
    wrap: true,
  },
  {
    name: "Receiver Number",
    selector: (row) => row.Receiver_Number,
    sortable: true,
    wrap: true,
  },
  {
    name: "Quantity On Hand",
    selector: (row) => row.Quantity_On_Hand,
    sortable: true,
    right: true,
  },
  {
    name: "Available Quantity",
    selector: (row) => row.Available_Quantity,
    sortable: true,
    right: true,
  },
  {
    name: "Reserved Quantity",
    selector: (row) => row.Reserved_Quantity,
    sortable: true,
    right: true,
  },
  {
    name: "Unit Cost",
    selector: (row) => row.Unit_Cost,
    sortable: true,
    right: true,
    cell: (row) => (
      <span>
        {row.Unit_Cost !== undefined && row.Unit_Cost !== null
          ? `$${parseFloat(row.Unit_Cost).toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`
          : ""}
      </span>
    ),
  },
  {
    name: "Total Stock Value",
    selector: (row) => row.Total_Stock_Value,
    sortable: true,
    right: true,
    cell: (row) => (
      <span>
        {row.Total_Stock_Value !== undefined && row.Total_Stock_Value !== null
          ? `$${parseFloat(row.Total_Stock_Value).toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`
          : ""}
      </span>
    ),
  },
  {
    name: "Stock Category Code",
    selector: (row) => row.Stock_Category_Code,
    sortable: true,
    wrap: true,
  },
  {
    name: "Condition",
    selector: (row) => row.Condition,
    sortable: true,
    wrap: true,
  },
  {
    name: "Serial Number",
    selector: (row) => row.Serial_Number,
    sortable: true,
    wrap: true,
  },
  {
    name: "Shelf Life",
    selector: (row) => row.Shelf_Life,
    sortable: true,
    wrap: true,
  },
  {
    name: "Location",
    selector: (row) => row.Location,
    sortable: true,
    wrap: true,
  },
  {
    name: "Warehouse",
    selector: (row) => row.Warehouse,
    sortable: true,
    wrap: true,
  },
  {
    name: "Reserved",
    selector: (row) => row.Reserved,
    sortable: true,
    wrap: true,
  },
  {
    name: "Days Since Rec",
    selector: (row) => row.Days_Since_Rec,
    sortable: true,
    right: true,
  },
  {
    name: "Received Date",
    selector: (row) => row.Received_Date,
    sortable: true,
    wrap: true,
  },
  {
    name: "Geo Code",
    selector: (row) => row.Geo_Code,
    sortable: true,
    wrap: true,
  },
  {
    name: "Repair Order Number",
    selector: (row) => row.Repair_Order_Number,
    sortable: true,
    wrap: true,
  },
  {
    name: "Purchase Order Number",
    selector: (row) => row.Purchase_Order_Number,
    sortable: true,
    wrap: true,
  },
  {
    name: "Work Order",
    selector: (row) => row.Work_Order,
    sortable: true,
    wrap: true,
  },
  {
    name: "Reserve Date",
    selector: (row) => row.Reserve_Date,
    sortable: true,
    wrap: true,
  },
  {
    name: "FieldPt Print Date",
    selector: (row) => row.FieldPt_Print_Date,
    sortable: true,
    wrap: true,
  },
  {
    name: "Mat Group",
    selector: (row) => row.Mat_Group,
    sortable: true,
    wrap: true,
  },
  {
    name: "Type",
    selector: (row) => row.Type,
    sortable: true,
    wrap: true,
  },
  {
    name: "Mat Sub Group",
    selector: (row) => row.Mat_Sub_Group,
    sortable: true,
    wrap: true,
  },
  {
    name: "Mat Sub Group Description",
    selector: (row) => row.Mat_Sub_Group_Description,
    sortable: true,
    wrap: true,
  },
  {
    name: "Country Of Manufacturer",
    selector: (row) => row.Country_Of_Manufacturer,
    sortable: true,
    wrap: true,
  },
  {
    name: "Ata Pos Ref",
    selector: (row) => row.Ata_Pos_Ref,
    sortable: true,
    wrap: true,
  },
  {
    name: "Manufacturer",
    selector: (row) => row.Manufacturer,
    sortable: true,
    wrap: true,
  },
  {
    name: "Ata Ref",
    selector: (row) => row.Ata_Ref,
    sortable: true,
    wrap: true,
  },
  {
    name: "Ata Description",
    selector: (row) => row.Ata_Description,
    sortable: true,
    wrap: true,
  },
  {
    name: "Part Group",
    selector: (row) => row.Part_Group,
    sortable: true,
    wrap: true,
  },
  {
    name: "Price Date",
    selector: (row) => row.Price_Date,
    sortable: true,
    wrap: true,
  },
  {
    name: "Home Lp",
    selector: (row) => row.Home_Lp,
    sortable: true,
    right: true,
  },
  {
    name: "Mfg Lp Usd",
    selector: (row) => row.Mfg_Lp_Usd,
    sortable: true,
    right: true,
  },
  {
    name: "Nsn Num",
    selector: (row) => row.Nsn_Num,
    sortable: true,
    wrap: true,
  },
  {
    name: "MaterialGroup",
    selector: (row) => row.MaterialGroup,
    sortable: true,
    wrap: true,
  },
  {
    name: "Stock Unit",
    selector: (row) => row.Stock_Unit,
    sortable: true,
    wrap: true,
  },
  {
    name: "Dangerous G",
    selector: (row) => row.Dangerous_G,
    sortable: true,
    wrap: true,
  },
];

const MiamiInventoryList = () => {
  const [inventories, setInventories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filteredInventories, setFilteredInventories] = useState([]);
  const [warehouseFilter, setWarehouseFilter] = useState("all");
  const [warehouses, setWarehouses] = useState([]);

  // Fetch and initialize data
  useEffect(() => {
    setLoading(true);
    fetch("/api/v1/miami_inventory/inventory")
      .then((res) => res.json())
      .then((json) => {
        const data = json.data || [];
        // Sort by Warehouse by default
        data.sort((a, b) => {
          if (a.Warehouse && b.Warehouse)
            return a.Warehouse.localeCompare(b.Warehouse);
          if (a.Warehouse) return -1;
          if (b.Warehouse) return 1;
          return 0;
        });
        setInventories(data);
        // Get unique warehouses
        const uniqueWarehouses = [
          ...new Set(data.map((inv) => inv.Warehouse).filter(Boolean)),
        ];
        setWarehouses(uniqueWarehouses);
        setLoading(false);
      });
  }, []);

  // Filtering logic: search & warehouse
  useEffect(() => {
    let filtered = inventories;
    if (warehouseFilter !== "all") {
      filtered = filtered.filter(
        (inv) => inv.Warehouse === warehouseFilter
      );
    }
    if (search) {
      const lowerSearch = search.toLowerCase();
      filtered = filtered.filter((inv) =>
        Object.values(inv)
          .join(" ")
          .toLowerCase()
          .includes(lowerSearch)
      );
    }
    setFilteredInventories(filtered);
  }, [search, inventories, warehouseFilter]);

  return (
    <div className="p-4">
      <h3 className="pb-5 text-[var(--dark-main)] font-bold">
        Miami Inventory List
      </h3>
      <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="border-b border-gray-400 px-2 py-1 rounded-none w-full md:w-72 focus:outline-none focus:border-b-2 focus:border-gray-600 mr-15"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={warehouseFilter}
          onChange={(e) => setWarehouseFilter(e.target.value)}
          className="border border-gray-400 px-2 py-1 rounded w-full md:w-72 focus:outline-none focus:border-2 focus:border-gray-600"
        >
          <option value="all">All Warehouses</option>
          {warehouses.map((wh) => (
            <option key={wh} value={wh}>
              {wh}
            </option>
          ))}
        </select>
      </div>
      <div className="overflow-x-auto">
        <DataTable
          columns={columns}
          data={filteredInventories}
          progressPending={loading}
          defaultSortFieldId={columns.findIndex(c => c.name === "Warehouse") + 1}
          defaultSortAsc={true}
          pagination
          highlightOnHover
          striped
          persistTableHead
          responsive
          noDataComponent={<div className="py-4">No inventory items found.</div>}
        />
      </div>
    </div>
  );
};

export default MiamiInventoryList;