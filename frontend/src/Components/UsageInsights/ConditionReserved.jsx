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

  // Tailwind-inspired color palette
  const twColors = [
    "#2563eb", "#1d4ed8", "#db2777", "#f59e42", "#10b981", "#f59e42", "#f43f5e",
    "#a21caf", "#bbf7d0", "#f87171", "#eab308", "#6366f1", "#be185d", "#22c55e",
    "#fde68a", "#06b6d4", "#fca5a5", "#3b82f6", "#84cc16", "#facc15"
  ];

  return {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: labels.map((_, i) => twColors[i % twColors.length]),
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
          font: { size: 14 },
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
      <h3 className="pb-5 font-bold text-gray-800">
        Percentage of QTY_RESERVED by Condition Code
      </h3>
      <div className="w-full min-h-[20rem] flex">
        <Pie data={pieData} options={pieOptions} />
      </div>
    </div>
  );
};

export default ConditionReserved;