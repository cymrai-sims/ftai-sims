import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";

// Example data for each location
const chartDataSets = {
  Montreal: [
    { Condition: "AR", QTY_RESERVED: 681 },
    { Condition: "NE", QTY_RESERVED: 140 },
    { Condition: "OH", QTY_RESERVED: 70 },
    { Condition: "US", QTY_RESERVED: 49 },
    { Condition: "SCR", QTY_RESERVED: 15 },
    { Condition: "REP", QTY_RESERVED: 4 },
    { Condition: "QT", QTY_RESERVED: 7 },
    { Condition: "NSM", QTY_RESERVED: 3 },
    { Condition: "NS", QTY_RESERVED: 3 },
    { Condition: "MODE", QTY_RESERVED: 1 },
    { Condition: "AST", QTY_RESERVED: 1 },
    { Condition: "SV", QTY_RESERVED: 4 },
  ],
  Miami: [
    { Condition: "AR", QTY_RESERVED: 250 },
    { Condition: "NE", QTY_RESERVED: 120 },
    { Condition: "OH", QTY_RESERVED: 100 },
    { Condition: "US", QTY_RESERVED: 20 },
    { Condition: "SCR", QTY_RESERVED: 10 },
    { Condition: "REP", QTY_RESERVED: 8 },
    { Condition: "QT", QTY_RESERVED: 3 },
    { Condition: "NSM", QTY_RESERVED: 5 },
    { Condition: "NS", QTY_RESERVED: 2 },
    { Condition: "MODE", QTY_RESERVED: 1 },
    { Condition: "AST", QTY_RESERVED: 1 },
    { Condition: "SV", QTY_RESERVED: 4 },
  ]
};

// Strict palette from provided CSS variables, rotate if needed
const cssPalette = [
  "#072E40", // --dark-main
  "#F36B21", // --orange-main
  "#1296BA", // --blue-main
  "#AFDCED", // --variant-blue
  "#F8C630", // --variant-orange
  "#FFF",    // --white
  "#000",    // --black
];

const getPieData = (inventory) => {
  const totals = {};
  let totalQty = 0;
  inventory.forEach((item) => {
    const code = item.Condition || "Unknown";
    const qty = Number(item.QTY_RESERVED) || 0;
    totals[code] = (totals[code] || 0) + qty;
    totalQty += qty;
  });

  const labels = Object.keys(totals);
  const values = Object.values(totals);

  return {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: labels.map((_, i) => cssPalette[i % cssPalette.length]),
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };
};

const getPieOptions = (inventory) => {
  const totals = {};
  let totalQty = 0;
  inventory.forEach((item) => {
    const code = item.Condition || "Unknown";
    const qty = Number(item.QTY_RESERVED) || 0;
    totals[code] = (totals[code] || 0) + qty;
    totalQty += qty;
  });
  return {
    plugins: {
      legend: {
        position: "right",
        labels: {
          font: { size: 14, family: "Helvetica, 'Helvetica Neue', Arial, sans-serif" },
        },
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.parsed;
            const percent = totalQty ? ((value / totalQty) * 100).toFixed(1) : 0;
            return `${label}: ${value} (${percent}%)`;
          },
        },
      },
    },
    maintainAspectRatio: false,
  };
};

const ConditionReservedCharts = () => {
  const [selectedLocation, setSelectedLocation] = useState("Montreal");
  const pieData = getPieData(chartDataSets[selectedLocation]);
  const pieOptions = getPieOptions(chartDataSets[selectedLocation]);

  return (
    <div className="flex flex-col p-4">
      <h3 className="pb-5 font-bold" style={{ color: "var(--dark-main)", fontFamily: "var(--primary-font)" }}>
        Percentage of Quantity Reserved by Condition
      </h3>
      <div className="mb-5">
        <label className="font-semibold text-sm mr-2" htmlFor="location-select">Select Location:</label>
        <select
          id="location-select"
          value={selectedLocation}
          onChange={e => setSelectedLocation(e.target.value)}
          className="border border-gray-400 px-2 py-1 rounded focus:outline-none focus:border-2 focus:border-[var(--dark-main)]"
        >
          {Object.keys(chartDataSets).map(loc => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
      </div>
      <div className="w-full min-h-[20rem] flex">
        <Pie data={pieData} options={pieOptions} />
      </div>
    </div>
  );
};

export default ConditionReservedCharts;