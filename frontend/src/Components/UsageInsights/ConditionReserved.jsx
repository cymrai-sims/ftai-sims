import React from "react";
import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";

// Example static data similar to your image
const conditionReserveData = [
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
  // Add more codes as needed to match your chart
];

// Your custom color palette from CSS variables
const customColors = [
  "#072E40",   // --dark-main
  "#F36B21",   // --orange-main
  "#1296BA",   // --blue-main
  "#AFDCED",   // --variant-blue
  "#F8C630",   // --variant-orange
  "#FFF",      // --white
  "#000",      // --black
  "#71828B",   // --dark-main-mid
  "#EEAA88",   // --orange-main-mid
  "#8EBFD4",   // --blue-main-mid
  "#D4E9F3",   // --variant-blue-mid
  "#F7DD97",   // --variant-orange-mid
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
        backgroundColor: labels.map((_, i) => customColors[i % customColors.length]),
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

const ConditionReserved = () => {
  const pieData = getPieData(conditionReserveData);
  const pieOptions = getPieOptions(conditionReserveData);

  return (
    <div className="flex flex-col p-4">
      <h3 className="pb-5 font-bold" style={{ color: "var(--dark-main)", fontFamily: "var(--primary-font)" }}>
        Percentage of Quantity Reserved by Condition
      </h3>
      <div className="w-full min-h-[20rem] flex">
        <Pie data={pieData} options={pieOptions} />
      </div>
    </div>
  );
};

export default ConditionReserved;