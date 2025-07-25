import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Link } from "react-router-dom";

// Register the required Chart.js components
Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const locations = ["Montreal", "Miami", "AAR"];

// Generate random values for min, max, and on target for each location
const randomData = () =>
  locations.map(() => ({
    min: Math.floor(Math.random() * 30) + 10,
    max: Math.floor(Math.random() * 30) + 40,
    onTarget: Math.floor(Math.random() * 30) + 20,
  }));

const dataPoints = randomData();

const data = {
  labels: locations,
  datasets: [
    {
      label: "Below Min",
      data: dataPoints.map((d) => d.min),
      backgroundColor: "rgb(248, 198, 48)",
    },
    {
      label: "Above Max",
      data: dataPoints.map((d) => d.max),
      backgroundColor: "rgb(7, 46, 64)",
    },
    {
      label: "On Target",
      data: dataPoints.map((d) => d.onTarget),
      backgroundColor: "rgb(243, 107, 33)",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { position: "top" },
    tooltip: { enabled: true },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const MinMaxValues = () => (
  <div className="w-full p-4">
    <h3 className="font-bold pb-5">Inventory Insights by location</h3>
    <Bar data={data} options={options} />
    <Link to={"/inventory/global-inventory"} className="">
      <button className="bg-[var(--dark-main)] text-white px-4 py-2 mt-4 inline-block hover:bg-[var(--blue-main)] transition-colors">
        Full MinMax Table
      </button>
    </Link>
  </div>
);

export default MinMaxValues;
