import React, { useState } from "react";
import DataTable from "react-data-table-component";

// Order types
const ORDER_TYPES = [
  "Work Order",
  "Purchase Order",
  "Sales Order",
  "Repair Order",
];

// Dummy data
const ORDERS = [
  { orderType: "Work Order", Order_Number: "#", Item: "#", Part_Number: "#", Quantity: "#", Unit_Cost: "#", Total_Cost: "#", Status: "#", Location: "#", Assigned_To: "#", Date_Created: "#", Date_Required: "#", Remarks: "#" },
  { orderType: "Work Order", Order_Number: "#", Item: "#", Part_Number: "#", Quantity: "#", Unit_Cost: "#", Total_Cost: "#", Status: "#", Location: "#", Assigned_To: "#", Date_Created: "#", Date_Required: "#", Remarks: "#" },
  { orderType: "Work Order", Order_Number: "#", Item: "#", Part_Number: "#", Quantity: "#", Unit_Cost: "#", Total_Cost: "#", Status: "#", Location: "#", Assigned_To: "#", Date_Created: "#", Date_Required: "#", Remarks: "#" },
  { orderType: "Work Order", Order_Number: "#", Item: "#", Part_Number: "#", Quantity: "#", Unit_Cost: "#", Total_Cost: "#", Status: "#", Location: "#", Assigned_To: "#", Date_Created: "#", Date_Required: "#", Remarks: "#" },
  { orderType: "Purchase Order", Order_Number: "#", Item: "#", Part_Number: "#", Quantity: "#", Unit_Cost: "#", Total_Cost: "#", Status: "#", Location: "#", Assigned_To: "#", Date_Created: "#", Date_Required: "#", Remarks: "#" },
  { orderType: "Purchase Order", Order_Number: "#", Item: "#", Part_Number: "#", Quantity: "#", Unit_Cost: "#", Total_Cost: "#", Status: "#", Location: "#", Assigned_To: "#", Date_Created: "#", Date_Required: "#", Remarks: "#" },
  { orderType: "Purchase Order", Order_Number: "#", Item: "#", Part_Number: "#", Quantity: "#", Unit_Cost: "#", Total_Cost: "#", Status: "#", Location: "#", Assigned_To: "#", Date_Created: "#", Date_Required: "#", Remarks: "#" },
  { orderType: "Purchase Order", Order_Number: "#", Item: "#", Part_Number: "#", Quantity: "#", Unit_Cost: "#", Total_Cost: "#", Status: "#", Location: "#", Assigned_To: "#", Date_Created: "#", Date_Required: "#", Remarks: "#" },
  { orderType: "Purchase Order", Order_Number: "#", Item: "#", Part_Number: "#", Quantity: "#", Unit_Cost: "#", Total_Cost: "#", Status: "#", Location: "#", Assigned_To: "#", Date_Created: "#", Date_Required: "#", Remarks: "#" },
  { orderType: "Purchase Order", Order_Number: "#", Item: "#", Part_Number: "#", Quantity: "#", Unit_Cost: "#", Total_Cost: "#", Status: "#", Location: "#", Assigned_To: "#", Date_Created: "#", Date_Required: "#", Remarks: "#" },
  { orderType: "Purchase Order", Order_Number: "#", Item: "#", Part_Number: "#", Quantity: "#", Unit_Cost: "#", Total_Cost: "#", Status: "#", Location: "#", Assigned_To: "#", Date_Created: "#", Date_Required: "#", Remarks: "#" },
  { orderType: "Purchase Order", Order_Number: "#", Item: "#", Part_Number: "#", Quantity: "#", Unit_Cost: "#", Total_Cost: "#", Status: "#", Location: "#", Assigned_To: "#", Date_Created: "#", Date_Required: "#", Remarks: "#" },
  { orderType: "Purchase Order", Order_Number: "#", Item: "#", Part_Number: "#", Quantity: "#", Unit_Cost: "#", Total_Cost: "#", Status: "#", Location: "#", Assigned_To: "#", Date_Created: "#", Date_Required: "#", Remarks: "#" },
  { orderType: "Sales Order", Order_Number: "#", Item: "#", Part_Number: "#", Quantity: "#", Unit_Cost: "#", Total_Cost: "#", Status: "#", Location: "#", Assigned_To: "#", Date_Created: "#", Date_Required: "#", Remarks: "#" },
  { orderType: "Sales Order", Order_Number: "#", Item: "#", Part_Number: "#", Quantity: "#", Unit_Cost: "#", Total_Cost: "#", Status: "#", Location: "#", Assigned_To: "#", Date_Created: "#", Date_Required: "#", Remarks: "#" },
  { orderType: "Sales Order", Order_Number: "#", Item: "#", Part_Number: "#", Quantity: "#", Unit_Cost: "#", Total_Cost: "#", Status: "#", Location: "#", Assigned_To: "#", Date_Created: "#", Date_Required: "#", Remarks: "#" },
  { orderType: "Repair Order", Order_Number: "#", Item: "#", Part_Number: "#", Quantity: "#", Unit_Cost: "#", Total_Cost: "#", Status: "#", Location: "#", Assigned_To: "#", Date_Created: "#", Date_Required: "#", Remarks: "#" },
  { orderType: "Work Order", Order_Number: "#", Item: "#", Part_Number: "#", Quantity: "#", Unit_Cost: "#", Total_Cost: "#", Status: "#", Location: "#", Assigned_To: "#", Date_Created: "#", Date_Required: "#", Remarks: "#" },
  { orderType: "Purchase Order", Order_Number: "#", Item: "#", Part_Number: "#", Quantity: "#", Unit_Cost: "#", Total_Cost: "#", Status: "#", Location: "#", Assigned_To: "#", Date_Created: "#", Date_Required: "#", Remarks: "#" },
  { orderType: "Sales Order", Order_Number: "#", Item: "#", Part_Number: "#", Quantity: "#", Unit_Cost: "#", Total_Cost: "#", Status: "#", Location: "#", Assigned_To: "#", Date_Created: "#", Date_Required: "#", Remarks: "#" },
  { orderType: "Repair Order", Order_Number: "#", Item: "#", Part_Number: "#", Quantity: "#", Unit_Cost: "#", Total_Cost: "#", Status: "#", Location: "#", Assigned_To: "#", Date_Created: "#", Date_Required: "#", Remarks: "#" },
  { orderType: "Repair Order", Order_Number: "#", Item: "#", Part_Number: "#", Quantity: "#", Unit_Cost: "#", Total_Cost: "#", Status: "#", Location: "#", Assigned_To: "#", Date_Created: "#", Date_Required: "#", Remarks: "#" },
  { orderType: "Repair Order", Order_Number: "#", Item: "#", Part_Number: "#", Quantity: "#", Unit_Cost: "#", Total_Cost: "#", Status: "#", Location: "#", Assigned_To: "#", Date_Created: "#", Date_Required: "#", Remarks: "#" },
  { orderType: "Repair Order", Order_Number: "#", Item: "#", Part_Number: "#", Quantity: "#", Unit_Cost: "#", Total_Cost: "#", Status: "#", Location: "#", Assigned_To: "#", Date_Created: "#", Date_Required: "#", Remarks: "#" },
  { orderType: "Repair Order", Order_Number: "#", Item: "#", Part_Number: "#", Quantity: "#", Unit_Cost: "#", Total_Cost: "#", Status: "#", Location: "#", Assigned_To: "#", Date_Created: "#", Date_Required: "#", Remarks: "#" },
];

// Fisher-Yates shuffle function
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// DataTable columns
const columns = [
  { name: "Order Type", selector: (row) => row.orderType, sortable: true, wrap: true },
  { name: "Order Number", selector: (row) => row.Order_Number, sortable: true, wrap: true },
  { name: "Item", selector: (row) => row.Item, sortable: true, wrap: true },
  { name: "Part Number", selector: (row) => row.Part_Number, sortable: true, wrap: true },
  { name: "Quantity", selector: (row) => row.Quantity, sortable: true, right: true },
  { name: "Unit Cost", selector: (row) => row.Unit_Cost, sortable: true, right: true },
  { name: "Total Cost", selector: (row) => row.Total_Cost, sortable: true, right: true },
  { name: "Status", selector: (row) => row.Status, sortable: true, wrap: true },
  { name: "Location", selector: (row) => row.Location, sortable: true, wrap: true },
  { name: "Assigned To", selector: (row) => row.Assigned_To, sortable: true, wrap: true },
  { name: "Date Created", selector: (row) => row.Date_Created, sortable: true, wrap: true },
  { name: "Date Required", selector: (row) => row.Date_Required, sortable: true, wrap: true },
  { name: "Remarks", selector: (row) => row.Remarks, sortable: false, wrap: true },
];

const ExampleTable = () => {
  const [search, setSearch] = useState("");
  const [orderType, setOrderType] = useState("all");
  const [orders] = useState(() => shuffleArray(ORDERS)); // Shuffled on first render

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      search === "" ||
      Object.values(order).join(" ").toLowerCase().includes(search.toLowerCase());
    const matchesType = orderType === "all" ? true : order.orderType === orderType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="p-4">
      <h3 className="pb-5 text-[var(--dark-main)] font-bold">Orders List</h3>
      <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="border-b border-gray-400 px-2 py-1 rounded-none w-full md:w-72 focus:outline-none focus:border-b-2 focus:border-gray-600 mr-15"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={orderType}
          onChange={(e) => setOrderType(e.target.value)}
          className="border border-gray-400 px-2 py-1 rounded w-full md:w-60 focus:outline-none focus:border-2 focus:border-gray-600"
        >
          <option value="all">All Orders</option>
          {ORDER_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
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
          noDataComponent={<div className="py-4">No orders found.</div>}
        />
      </div>
    </div>
  );
};

export default ExampleTable;