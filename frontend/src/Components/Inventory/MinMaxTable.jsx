import React, { useMemo, useState } from 'react';
 
// The table data structure matches your screenshot's columns
const TABLE_ROWS = [
  {
    description: "LOCK-BLADE STG 2",
    partialQPE: 2,
    avgReplace: "80.00%",
    avgRO_SR: 2,
    avgReplenishment: 2,
    avgWOWeek: 2,
    maxReplenishment: 2,
    minLPC5B: 2,
    setEquiv: "4.35x",
    max21_5B: 22,
    qtyAVAI: 22,
    aarQty: 22,
    poOpen: 0,
    roOpen: 0,
    mtlWIP: 0,
    orderRedistribute: 22,
    matGroup: "HY HARDWALL",
    group: "LPC AIRFOILS"
  },
  {
    description: "LOCK-BLADE STG 3",
    partialQPE: 2,
    avgReplace: "100.00%",
    avgRO_SR: 2,
    avgReplenishment: 2,
    avgWOWeek: 2,
    maxReplenishment: 2,
    minLPC5B: 2,
    setEquiv: "5.29x",
    max21_5B: 13,
    qtyAVAI: 13,
    aarQty: 13,
    poOpen: 0,
    roOpen: 0,
    mtlWIP: 0,
    orderRedistribute: 13,
    matGroup: "HY HARDWALL",
    group: "LPC AIRFOILS"
  },
  {
    description: "LOCK-BLADE STG 4",
    partialQPE: 2,
    avgReplace: "100.00%",
    avgRO_SR: 2,
    avgReplenishment: 2,
    avgWOWeek: 2,
    maxReplenishment: 2,
    minLPC5B: 2,
    setEquiv: "5.29x",
    max21_5B: 29,
    qtyAVAI: 29,
    aarQty: 29,
    poOpen: 0,
    roOpen: 0,
    mtlWIP: 0,
    orderRedistribute: 14,
    matGroup: "HY HARDWALL",
    group: "LPC AIRFOILS"
  },
  {
    description: "LOCK-BLADE STG 5",
    partialQPE: 2,
    avgReplace: "100.00%",
    avgRO_SR: 2,
    avgReplenishment: 2,
    avgWOWeek: 2,
    maxReplenishment: 2,
    minLPC5B: 2,
    setEquiv: "5.29x",
    max21_5B: 23,
    qtyAVAI: 23,
    aarQty: 23,
    poOpen: 0,
    roOpen: 0,
    mtlWIP: 0,
    orderRedistribute: 18,
    matGroup: "HY HARDWALL",
    group: "LPC AIRFOILS"
  },
  // ... (add all other rows from image here, preserving grouping and structure!)
];
 
// Columns config for react-data-table-component
const columns = [
  {
    name: "DESCRIPTION",
    selector: row => row.description,
    sortable: true,
    grow: 2,
  },
  {
    name: "Partial QPE",
    selector: row => row.partialQPE,
    sortable: true,
    right: true,
  },
  {
    name: "AVG Replace",
    selector: row => row.avgReplace,
    sortable: true,
    right: true,
  },
  {
    name: "Avg RO_SR",
    selector: row => row.avgRO_SR,
    sortable: true,
    right: true,
  },
  {
    name: "AVG Replenishment",
    selector: row => row.avgReplenishment,
    sortable: true,
    right: true,
  },
  {
    name: "AVG WO Per Week",
    selector: row => row.avgWOWeek,
    sortable: true,
    right: true,
  },
  {
    name: "MAX Replenishment",
    selector: row => row.maxReplenishment,
    sortable: true,
    right: true,
  },
  {
    name: "MIN (LPC 5B)",
    selector: row => row.minLPC5B,
    sortable: true,
    right: true,
  },
  {
    name: "SET EQUIV (21 5B)",
    selector: row => row.setEquiv,
    sortable: true,
    right: true,
  },
  {
    name: "MAX (21 5B)",
    selector: row => row.max21_5B,
    sortable: true,
    right: true,
  },
  {
    name: "QTY_AVAI",
    selector: row => row.qtyAVAI,
    sortable: true,
    right: true,
  },
  {
    name: "AAR_QTY",
    selector: row => row.aarQty,
    sortable: true,
    right: true,
  },
  {
    name: "PO_OPEN",
    selector: row => row.poOpen,
    sortable: true,
    right: true,
  },
  {
    name: "RO_OPEN",
    selector: row => row.roOpen,
    sortable: true,
    right: true,
  },
  {
    name: "MTL_WIP",
    selector: row => row.mtlWIP,
    sortable: true,
    right: true,
  },
  {
    name: "Order/(Redistribute)",
    selector: row => row.orderRedistribute,
    sortable: true,
    right: true,
  },
];
 
import DataTable from "react-data-table-component";
 
const MinMaxTable = () => {
  // Optionally implement filtering/searching/grouping if you want!
  const [search, setSearch] = useState("");
 
  // Filtered by search string
  const filteredRows = useMemo(() => {
    if (!search) return TABLE_ROWS;
    return TABLE_ROWS.filter(row =>
      Object.values(row)
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);
 
  return (
<div className="p-4">
<h3 className="pb-5 text-[var(--dark-main)] font-bold">
        Inventory Min/Max Table
</h3>
<input
        type="text"
        placeholder="Search..."
        className="border-b border-gray-400 px-2 py-1 rounded-none w-full md:w-72 focus:outline-none focus:border-b-2 focus:border-gray-600 mb-4"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
<DataTable
        columns={columns}
        data={filteredRows}
        pagination
        highlightOnHover
        striped
        persistTableHead
        responsive
        dense
        noDataComponent={<div className="py-4">No records found.</div>}
      />
</div>
  );
};
 
export default MinMaxTable;