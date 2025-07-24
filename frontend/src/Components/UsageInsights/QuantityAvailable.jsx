import React from "react";
import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";

// Static values to match the chart in image2
const availableData = [
  { label: "NE (New)", value: 990 },      
  { label: "Other Conditions", value: 10 }
];

const getPieData = () => {
  const labels = availableData.map(d => d.label);
  const values = availableData.map(d => d.value);

  return {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: [
          "#22c55e", 
          "#d1d5db", 
        ],
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };
};

const getPieOptions = () => {
  const total = availableData.reduce((sum, d) => sum + d.value, 0);
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
            const percent = total ? ((value / total) * 100).toFixed(1) : 0;
            return `${label}: ${value} (${percent}%)`;
          },
        },
      },
    },
    maintainAspectRatio: false,
  };
};

const QuantityAvailable = () => {
  const pieData = getPieData();
  const pieOptions = getPieOptions();

  return (
    <div className="flex flex-col p-4">
      <h3 className="pb-5 font-bold text-gray-800">
        Share of QTY_AVAILABLE: NE (New) vs Other Conditions
      </h3>
      <div className="w-full min-h-[16rem] flex">
        <Pie data={pieData} options={pieOptions} />
      </div>
    </div>
  );
};

export default QuantityAvailable;