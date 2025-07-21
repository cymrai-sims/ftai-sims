import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const generateParts = (count, type) => {
  return Array.from({ length: count }, (_, idx) => ({
    partNumber: `${type}-${idx + 1}`,
    inventory:
      type === "Runner"
        ? Math.floor(Math.random() * 500) + 500 // Runners: high inventory
        : Math.floor(Math.random() * 20) + 1, // Strangers: low inventory
  }));
};

const UsageInsights = () => {
  const [runners, setRunners] = useState([]);
  const [strangers, setStrangers] = useState([]);

  useEffect(() => {
    setRunners(generateParts(100, "Runner"));
    setStrangers(generateParts(100, "Stranger"));
  }, []);

  const runnersData = {
    labels: runners.map((part) => part.partNumber),
    datasets: [
      {
        label: "Runner Inventory",
        data: runners.map((part) => part.inventory),
        backgroundColor: "rgba(37,99,235,0.7)",
        borderColor: "rgba(37,99,235,1)",
        borderWidth: 1,
      },
    ],
  };

  const strangersData = {
    labels: strangers.map((part) => part.partNumber),
    datasets: [
      {
        label: "Stranger Inventory",
        data: strangers.map((part) => part.inventory),
        backgroundColor: "rgba(220,38,38,0.7)",
        borderColor: "rgba(220,38,38,1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      x: {
        display: false, // Hide x axis labels for clarity with so many bars
      },
      y: {
        beginAtZero: true,
        ticks: { color: "#666" },
        grid: { color: "#eee" },
      },
    },
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h3 className="pb-2 text-gray-800 font-bold">
        Inventory: Strangers & Runners (Top & Bottom 100 Parts)
      </h3>
      <div className="flex flex-col gap-12">
        <div>
          <h4 className="text-blue-700 font-semibold mb-2">
            Top 100 Runners (High Inventory)
          </h4>
          <div className="bg-blue-50 rounded shadow p-4">
            <Bar data={runnersData} options={options} height={200} />
            <div className="text-xs text-gray-600 mt-2">
              Each bar represents a runner part, sorted by part number.
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-red-700 font-semibold mb-2">
            Bottom 100 Strangers (Low Inventory)
          </h4>
          <div className="bg-red-50 rounded shadow p-4">
            <Bar data={strangersData} options={options} height={100} />
            <div className="text-xs text-gray-600 mt-2">
              Each bar represents a stranger part, sorted by part number.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsageInsights;