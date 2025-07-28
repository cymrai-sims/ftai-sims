import React, { useState } from "react";
import DataTable from "react-data-table-component";

// Work orders data
const WORK_ORDERS = [
  {
    orderNo: "CHUZT1A",
    vendor: "Airline A",
    engine: "CFM56",
    dueDate: "July 1, 2025",
    status: "Complete",
  },
  {
    orderNo: "CHUZT1A",
    vendor: "Airline A",
    engine: "CFM56",
    dueDate: "July 30, 2025",
    status: "In Progress",
  },
  {
    orderNo: "CHUZT1A",
    vendor: "Airline A",
    engine: "CFM56",
    dueDate: "July 15, 2025",
    status: "Complete",
  },
  {
    orderNo: "CHUZT1A",
    vendor: "Airline A",
    engine: "CFM56",
    dueDate: "July 1, 2025",
    status: "Not Started",
  },
  {
    orderNo: "CHUZT1A",
    vendor: "Airline A",
    engine: "CFM56",
    dueDate: "August 12, 2025",
    status: "In Progress",
  },
  {
    orderNo: "CHUZT1A",
    vendor: "Airline A",
    engine: "CFM56",
    dueDate: "July 28, 2025",
    status: "In Progress",
  },
];

// For status color rendering
const statusColor = {
  Complete: "text-green-500",
  "In Progress": "text-gray-900",
  "Not Started": "text-red-500",
};

// Status filter options
const statusFilters = [
  { label: "All", value: "all" },
  { label: "Complete", value: "Complete" },
  { label: "In Progress", value: "In Progress" },
  { label: "Not Started", value: "Not Started" },
];

// Columns config for react-data-table-component
const columns = [
  {
    name: "Order No",
    selector: (row) => row.orderNo,
    sortable: true,
  },
  {
    name: "Vendor",
    selector: (row) => row.vendor,
    sortable: true,
  },
  {
    name: "Engine",
    selector: (row) => row.engine,
    sortable: true,
  },
  {
    name: "Due Date",
    selector: (row) => row.dueDate,
    sortable: true,
  },
  {
    name: "Status",
    selector: (row) => row.status,
    sortable: true,
    cell: (row) => (
      <span className={statusColor[row.status] || "text-gray-900"}>
        {row.status}
      </span>
    ),
  },
];

const WorkOrderList = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Filtering logic
  const filteredOrders = WORK_ORDERS.filter((order) => {
    // Status filter
    const matchesStatus =
      statusFilter === "all" ? true : order.status === statusFilter;

    // Search filter (case-insensitive, all fields)
    const matchesSearch =
      search === "" ||
      Object.values(order)
        .map((v) => String(v).toLowerCase())
        .some((field) => field.includes(search.toLowerCase()));

    return matchesStatus && matchesSearch;
  });

  return (
    <div className="p-4">
      <h3 className="pb-5 text-[var(--dark-main)] font-bold">
        Current Work Orders
      </h3>
      <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="border-b border-gray-400 px-2 py-1 rounded-none w-full md:w-72 focus:outline-none focus:border-b-2 focus:border-gray-600 mr-15"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex gap-2">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border border-gray-400 px-3 py-1 rounded focus:outline-none focus:border-2 focus:border-[var(--dark-main)]"
          >
            {statusFilters.map((f) => (
              <option key={f.value} value={f.value}>
                {f.label}
              </option>
            ))}
          </select>
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
          noDataComponent={<div className="py-4">No work orders found.</div>}
        />
      </div>
    </div>
  );
};

export default WorkOrderList;