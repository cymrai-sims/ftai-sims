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
      backgroundColor: "rgba(248, 198, 48, 0.8)",
    },
    {
      label: "Above Max",
      data: dataPoints.map((d) => d.max),
      backgroundColor: "rgba(7, 46, 64, 0.8)",
    },
    {
      label: "On Target",
      data: dataPoints.map((d) => d.onTarget),
      backgroundColor: "rgba(243, 107, 33, 0.8)",
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
  </div>
);

export default MinMaxValues;
