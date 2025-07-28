import React, { useState } from "react";
import DataTable from "react-data-table-component";

// Dummy stock line data
const STOCK_LINE = [
  { stockline: "CHUZT1A", field_1: "#", field_2: "#", field_3: "#", field_4: "#", field_5: "#", field_6: "#", field_7: "#", field_8: "#" },
  { stockline: "CHUZT1B", field_1: "#", field_2: "#", field_3: "#", field_4: "#", field_5: "#", field_6: "#", field_7: "#", field_8: "#" },
  { stockline: "CHUZT1C", field_1: "#", field_2: "#", field_3: "#", field_4: "#", field_5: "#", field_6: "#", field_7: "#", field_8: "#" },
  { stockline: "CHUZT1D", field_1: "#", field_2: "#", field_3: "#", field_4: "#", field_5: "#", field_6: "#", field_7: "#", field_8: "#" },
  { stockline: "CHUZT1E", field_1: "#", field_2: "#", field_3: "#", field_4: "#", field_5: "#", field_6: "#", field_7: "#", field_8: "#" },
  { stockline: "CHUZT1F", field_1: "#", field_2: "#", field_3: "#", field_4: "#", field_5: "#", field_6: "#", field_7: "#", field_8: "#" },
  { stockline: "CHUZT1G", field_1: "#", field_2: "#", field_3: "#", field_4: "#", field_5: "#", field_6: "#", field_7: "#", field_8: "#" },
  { stockline: "CHUZT1H", field_1: "#", field_2: "#", field_3: "#", field_4: "#", field_5: "#", field_6: "#", field_7: "#", field_8: "#" },
  { stockline: "CHUZT1I", field_1: "#", field_2: "#", field_3: "#", field_4: "#", field_5: "#", field_6: "#", field_7: "#", field_8: "#" },
  { stockline: "CHUZT1J", field_1: "#", field_2: "#", field_3: "#", field_4: "#", field_5: "#", field_6: "#", field_7: "#", field_8: "#" },
  { stockline: "CHUZT1AK", field_1: "#", field_2: "#", field_3: "#", field_4: "#", field_5: "#", field_6: "#", field_7: "#", field_8: "#" },
  { stockline: "CHUZT1L", field_1: "#", field_2: "#", field_3: "#", field_4: "#", field_5: "#", field_6: "#", field_7: "#", field_8: "#" },
  { stockline: "CHUZT1M", field_1: "#", field_2: "#", field_3: "#", field_4: "#", field_5: "#", field_6: "#", field_7: "#", field_8: "#" },
];

// Example status filter; you can adjust values and labels to match your use case
const statusFilters = [
  { label: "All", value: "all" },
  { label: "CHUZT1A", value: "CHUZT1A" },
  { label: "CHUZT1B", value: "CHUZT1B" },
  { label: "CHUZT1C", value: "CHUZT1C" },
  // Add more if you want more filtering options.
];

// Columns config for react-data-table-component
const columns = [
  { name: "Stock Line", selector: (row) => row.stockline, sortable: true },
  { name: "Field 1", selector: (row) => row.field_1, sortable: true },
  { name: "Field 2", selector: (row) => row.field_2, sortable: true },
  { name: "Field 3", selector: (row) => row.field_3, sortable: true },
  { name: "Field 4", selector: (row) => row.field_4, sortable: true },
  { name: "Field 5", selector: (row) => row.field_5, sortable: true },
  { name: "Field 6", selector: (row) => row.field_6, sortable: true },
  { name: "Field 7", selector: (row) => row.field_7, sortable: true },
  { name: "Field 8", selector: (row) => row.field_8, sortable: true },
];

const ExampleTable = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [workOrders, setWorkOrders] = useState(STOCK_LINE);

  // Filtering logic
  const filteredOrders = workOrders.filter((order) => {
    // Search filter (case-insensitive, all fields)
    const matchesSearch =
      search === "" ||
      Object.values(order).join(" ").toLowerCase().includes(search.toLowerCase());
    // Status filter (by stockline)
    const matchesStatus = statusFilter === "all" ? true : order.stockline === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-4">
      <h3 className="pb-5 text-[var(--dark-main)] font-bold">
        Current Stock Lines
      </h3>
      <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="border-b border-gray-400 px-2 py-1 rounded-none w-full md:w-72 focus:outline-none focus:border-b-2 focus:border-gray-600 mr-15"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex gap-2 flex-wrap">
          {statusFilters.map((f) => (
            <button
              key={f.value}
              className={`px-3 py-1 rounded ${
                statusFilter === f.value
                  ? "bg-[var(--dark-main)] text-white"
                  : "bg-gray-200 text-[var(--dark-main)]"
              }`}
              onClick={() => setStatusFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>
      <div className="overflow-x-auto">
        <DataTable
          columns={columns}
          data={filteredOrders}
          pagination
          highlightOnHover
          striped
          persistTableHead
          responsive
          noDataComponent={<div className="py-4">No stock lines found.</div>}
        />
      </div>
    </div>
  );
};

export default ExampleTable;