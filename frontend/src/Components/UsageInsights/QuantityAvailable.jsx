import React from "react";
import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";

// Static values to match the chart in image2 (adjusted data for Miami and Montreal)
const availableDataSets = {
  Montreal: [
    { label: "NE (New)", value: 990 },
    { label: "Other Conditions", value: 10 }
  ],
  Miami: [
    { label: "NE (New)", value: 500 },
    { label: "Other Conditions", value: 60 }
  ]
};

const colorPalette = [
  "#1296BA", // --blue-main
  "#F8C630", // --variant-orange
];

const getPieData = (data) => {
  const labels = data.map(d => d.label);
  const values = data.map(d => d.value);

  return {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: colorPalette,
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };
};

const getPieOptions = (data) => {
  const total = data.reduce((sum, d) => sum + d.value, 0);
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
  const [selectedLocation, setSelectedLocation] = React.useState("Montreal");
  const pieData = getPieData(availableDataSets[selectedLocation]);
  const pieOptions = getPieOptions(availableDataSets[selectedLocation]);

  return (
    <div className="flex flex-col p-4">
      <h3 className="pb-5 font-bold text-gray-800">
        Share of Quantity Available: NE (New) vs Other Conditions
      </h3>
      <div className="mb-5">
        <label className="font-semibold text-sm mr-2" htmlFor="location-select">Select Location:</label>
        <select
          id="location-select"
          value={selectedLocation}
          onChange={e => setSelectedLocation(e.target.value)}
          className="border border-gray-400 px-2 py-1 rounded focus:outline-none focus:border-2 focus:border-[var(--blue-main)]"
        >
          {Object.keys(availableDataSets).map(loc => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
      </div>
      <div className="w-full min-h-[16rem] flex">
        <Pie data={pieData} options={pieOptions} />
      </div>
    </div>
  );
};

export default QuantityAvailable;