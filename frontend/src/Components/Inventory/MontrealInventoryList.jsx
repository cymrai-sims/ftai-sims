import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

// Table columns
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
    name: "Condition",
    selector: (row) => row.Condition,
    sortable: true,
    wrap: true,
  },
  {
    name: "Location",
    selector: (row) => row.Location,
    sortable: true,
    wrap: true,
  },
  // Put Warehouse here for filtering
  {
    name: "Warehouse",
    selector: (row) => row.Warehouse,
    sortable: true,
    wrap: true,
  },
  {
    name: "Source",
    selector: (row) => row.Source,
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
    name: "Received Date",
    selector: (row) => row.Received_Date,
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
    name: "Repair Order Number",
    selector: (row) => row.Repair_Order_Number,
    sortable: true,
    wrap: true,
  },
  {
    name: "Unit Of Measure",
    selector: (row) => row.Unit_Of_Measure,
    sortable: true,
    wrap: true,
  },
];

const MontrealInventoryList = () => {
  const [inventories, setInventories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filteredInventories, setFilteredInventories] = useState([]);
  const [warehouseFilter, setWarehouseFilter] = useState("all");
  const [warehouses, setWarehouses] = useState([]);

  // Fetch and initialize data
  useEffect(() => {
    setLoading(true);
    fetch("/api/v1/montreal_inventory/inventory")
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
        Montreal Inventory List
      </h3>
      <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="border-b border-gray-400 px-2 py-1 rounded-none w-full md:w-72 focus:outline-none focus:border-b-2 focus:border-gray-600 mr-15"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex flex-wrap gap-2">
          <button
            className={`px-3 py-1 rounded ${
              warehouseFilter === "all"
                ? "bg-[var(--dark-main)] text-white"
                : "bg-gray-200 text-[var(--dark-main)]"
            }`}
            onClick={() => setWarehouseFilter("all")}
          >
            All Warehouses
          </button>
          {warehouses.map((wh) => (
            <button
              key={wh}
              className={`px-3 py-1 rounded ${
                warehouseFilter === wh
                  ? "bg-[var(--dark-main)] text-white"
                  : "bg-gray-200 text-[var(--dark-main)]"
              }`}
              onClick={() => setWarehouseFilter(wh)}
            >
              {wh}
            </button>
          ))}
        </div>
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

export default MontrealInventoryList;