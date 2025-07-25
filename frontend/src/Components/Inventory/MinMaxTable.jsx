import React, { useMemo, useState } from 'react';
 
// The table data structure matches your screenshot's columns
const TABLE_ROWS = [
  {
    description: "LOCK-BLADE STG 2",
    partialQPE: 2,
    avgReplace: "80.00%",
    avgRO_SR: "40.00%",
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
    matGroup: "21x",
    group: "HV HARDWARE"
  },
  {
    description: "LOCK-BLADE STG 3",
    partialQPE: 2,
    avgReplace: "100.00%",
    avgRO_SR: "50.00%",
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
    matGroup: "21x",
    group: "HV HARDWARE"
  },
  {
    description: "LOCK-BLADE STG 4",
    partialQPE: 2,
    avgReplace: "100.00%",
    avgRO_SR: "50.00%",
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
    matGroup: "21x",
    group: "HV HARDWARE"
  },
  {
    description: "LOCK-BLADE STG 5",
    partialQPE: 2,
    avgReplace: "100.00%",
    avgRO_SR: "50.00%",
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
    matGroup: "21x",
    group: "HV HARDWARE"
  },
  {
    description: "BLADE, BSTR STG 2 (LOCKING)",
    partialQPE: 4,
    avgReplace: "50.00%",
    avgRO_SR: "50.00%",
    avgReplenishment: 4,
    avgWOWeek: 2,
    maxReplenishment: 11,
    minLPC5B: 17,
    setEquiv: "4.35x",
    max21_5B: 42,
    qtyAVAI: 76,
    aarQty: 20,
    poOpen: 16,
    roOpen: 0,
    mtlWIP: 79,
    orderRedistribute: "34",
    matGroup: "21x",
    group: "LPC AIRFOILS"
  },
  {
    description: "BLADE, BSTR STG 2 (NARROW)",
    partialQPE: 28,
    avgReplace: "60.71%",
    avgRO_SR: "34.66%",
    avgReplenishment: 4,
    avgWOWeek: 2,
    maxReplenishment: 10,
    minLPC5B: 148,
    setEquiv: "5.29x",
    max21_5B: 328,
    qtyAVAI: 321,
    aarQty: 137,
    poOpen: 192,
    roOpen: 36,
    mtlWIP: 661,
    orderRedistribute: "7",
    matGroup: "21x",
    group: "LPC AIRFOILS"
  },
  {
    description: "BLADE, BSTR STG 2 (WIDE)",
    partialQPE: 32,
    avgReplace: "41.41%",
    avgRO_SR: "24.10%",
    avgReplenishment: 5,
    avgWOWeek: 2,
    maxReplenishment: 18,
    minLPC5B: 121,
    setEquiv: "3.78x",
    max21_5B: 477,
    qtyAVAI: 302,
    aarQty: 115,
    poOpen: 83,
    roOpen: 30,
    mtlWIP: 532,
    orderRedistribute: "175",
    matGroup: "21x",
    group: "LPC AIRFOILS"
  },
  {
    description: "BLADE, BSTR STG 3 (LOCKING)",
    partialQPE: 4,
    avgReplace: "48.08%",
    avgRO_SR: "38.19%",
    avgReplenishment: 4,
    avgWOWeek: 2,
    maxReplenishment: 9,
    minLPC5B: 14,
    setEquiv: "3.48x",
    max21_5B: 33,
    qtyAVAI: 67,
    aarQty: 18,
    poOpen: 14,
    roOpen: 0,
    mtlWIP: 75,
    orderRedistribute: "34",
    matGroup: "21x",
    group: "LPC AIRFOILS"
  },
  {
    description: "BLADE, BSTR STG 3 (NARROW)",
    partialQPE: 28,
    avgReplace: "75.71%",
    avgRO_SR: "17.78%",
    avgReplenishment: 4,
    avgWOWeek: 2,
    maxReplenishment: 8,
    minLPC5B: 155,
    setEquiv: "5.55x",
    max21_5B: 358,
    qtyAVAI: 464,
    aarQty: 104,
    poOpen: 76,
    roOpen: 0,
    mtlWIP: 723,
    orderRedistribute: "106",
    matGroup: "21x",
    group: "LPC AIRFOILS"
  },
  {
    description: "BLADE, BSTR STG 3 (WIDE)",
    partialQPE: 38,
    avgReplace: "37.28%",
    avgRO_SR: "46.48%",
    avgReplenishment: 4,
    avgWOWeek: 2,
    maxReplenishment: 9,
    minLPC5B: 111,
    setEquiv: "2.91x",
    max21_5B: 251,
    qtyAVAI: 96,
    aarQty: 138,
    poOpen: 206,
    roOpen: 0,
    mtlWIP: 573,
    orderRedistribute: "155",
    matGroup: "21x",
    group: "LPC AIRFOILS"
  },
  {
    description: "BLADE, BSTR STG 4 (LOCKING)",
    partialQPE: 4,
    avgReplace: "50.00%",
    avgRO_SR: "58.33%",
    avgReplenishment: 4,
    avgWOWeek: 2,
    maxReplenishment: 10,
    minLPC5B: 17,
    setEquiv: "4.15x",
    max21_5B: 42,
    qtyAVAI: 59,
    aarQty: 17,
    poOpen: 13,
    roOpen: 0,
    mtlWIP: 76,
    orderRedistribute: "17",
    matGroup: "21x",
    group: "LPC AIRFOILS"
  },
  {
    description: "BLADE, BSTR STG 4 (NARROW)",
    partialQPE: 38,
    avgReplace: "92.11%",
    avgRO_SR: "26.33%",
    avgReplenishment: 5,
    avgWOWeek: 2,
    maxReplenishment: 14,
    minLPC5B: 357,
    setEquiv: "9.41x",
    max21_5B: 998,
    qtyAVAI: 419,
    aarQty: 105,
    poOpen: 171,
    roOpen: 0,
    mtlWIP: 728,
    orderRedistribute: "579",
    matGroup: "21x",
    group: "LPC AIRFOILS"
  },
  {
    description: "BLADE, BSTR STG 4 (WIDE)",
    partialQPE: 28,
    avgReplace: "68.25%",
    avgRO_SR: "18.94%",
    avgReplenishment: 4,
    avgWOWeek: 2,
    maxReplenishment: 9,
    minLPC5B: 140,
    setEquiv: "4.99x",
    max21_5B: 327,
    qtyAVAI: 234,
    aarQty: 89,
    poOpen: 67,
    roOpen: 0,
    mtlWIP: 525,
    orderRedistribute: "93",
    matGroup: "21x",
    group: "LPC AIRFOILS"
  },
  {
    description: "BLADE, BSTR STG 5 (LOCKING)",
    partialQPE: 4,
    avgReplace: "50.00%",
    avgRO_SR: "32.50%",
    avgReplenishment: 4,
    avgWOWeek: 2,
    maxReplenishment: 8,
    minLPC5B: 15,
    setEquiv: "3.77x",
    max21_5B: 33,
    qtyAVAI: 71,
    aarQty: 12,
    poOpen: 12,
    roOpen: 0,
    mtlWIP: 70,
    orderRedistribute: "38",
    matGroup: "21x",
    group: "LPC AIRFOILS"
  },
  {
    description: "BLADE, BSTR STG 5 (NARROW)",
    partialQPE: 29,
    avgReplace: "86.21%",
    avgRO_SR: "40.51%",
    avgReplenishment: 5,
    avgWOWeek: 2,
    maxReplenishment: 11,
    minLPC5B: 246,
    setEquiv: "8.48x",
    max21_5B: 570,
    qtyAVAI: 529,
    aarQty: 77,
    poOpen: 169,
    roOpen: 300,
    mtlWIP: 670,
    orderRedistribute: "41",
    matGroup: "21x",
    group: "LPC AIRFOILS"
  },
  {
    description: "BLADE, BSTR STG 5 (WIDE)",
    partialQPE: 35,
    avgReplace: "48.57%",
    avgRO_SR: "37.83%",
    avgReplenishment: 4,
    avgWOWeek: 2,
    maxReplenishment: 8,
    minLPC5B: 134,
    setEquiv: "3.84x",
    max21_5B: 275,
    qtyAVAI: 183,
    aarQty: 24,
    poOpen: 24,
    roOpen: 84,
    mtlWIP: 489,
    orderRedistribute: "92",
    matGroup: "21x",
    group: "LPC AIRFOILS"
  },
  {
    description: "VANE ASSY-FAN BSTR STG 1",
    partialQPE: 1,
    avgReplace: "100.00%",
    avgRO_SR: "28.57%",
    avgReplenishment: 10,
    avgWOWeek: 2,
    maxReplenishment: 14,
    minLPC5B: 20,
    setEquiv: "19.66x",
    max21_5B: 29,
    qtyAVAI: 0,
    aarQty: 0,
    poOpen: 1,
    roOpen: 31,
    mtlWIP: 14,
    orderRedistribute: "29",
    matGroup: "21x",
    group: "LPC AIRFOILS"
  },
  {
    description: "VANE ASSY-FAN BSTR STG 2",
    partialQPE: 1,
    avgReplace: "100.00%",
    avgRO_SR: "26.98%",
    avgReplenishment: 26,
    avgWOWeek: 2,
    maxReplenishment: 32,
    minLPC5B: 53,
    setEquiv: "52.80x",
    max21_5B: 63,
    qtyAVAI: 1,
    aarQty: 2,
    poOpen: 2,
    roOpen: 24,
    mtlWIP: 30,
    orderRedistribute: "62",
    matGroup: "21x",
    group: "LPC AIRFOILS"
  },
  {
    description: "VANE ASSY-FAN BSTR STG 3",
    partialQPE: 1,
    avgReplace: "100.00%",
    avgRO_SR: "41.67%",
    avgReplenishment: 20,
    avgWOWeek: 2,
    maxReplenishment: 30,
    minLPC5B: 41,
    setEquiv: "40.80x",
    max21_5B: 59,
    qtyAVAI: 2,
    aarQty: 0,
    poOpen: 0,
    roOpen: 33,
    mtlWIP: 20,
    orderRedistribute: "57",
    matGroup: "21x",
    group: "LPC AIRFOILS"
  },
  {
    description: "VANE ASSY-FAN BSTR STG 4",
    partialQPE: 1,
    avgReplace: "100.00%",
    avgRO_SR: "32.78%",
    avgReplenishment: 23,
    avgWOWeek: 2,
    maxReplenishment: 36,
    minLPC5B: 46,
    setEquiv: "45.86x",
    max21_5B: 72,
    qtyAVAI: 2,
    aarQty: 0,
    poOpen: 2,
    roOpen: 33,
    mtlWIP: 26,
    orderRedistribute: "70",
    matGroup: "21x",
    group: "LPC AIRFOILS"
  },
  {
    description: "VANE ASSY-FAN BSTR STG 5",
    partialQPE: 1,
    avgReplace: "100.00%",
    avgRO_SR: "40.00%",
    avgReplenishment: 19,
    avgWOWeek: 2,
    maxReplenishment: 49,
    minLPC5B: 39,
    setEquiv: "38.91x",
    max21_5B: 98,
    qtyAVAI: 2,
    aarQty: 0,
    poOpen: 0,
    roOpen: 36,
    mtlWIP: 23,
    orderRedistribute: "96",
    matGroup: "21x",
    group: "LPC AIRFOILS"
  }
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