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

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const randomPartName = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const prefix = Array.from({ length: 4 }, () =>
    chars[Math.floor(Math.random() * chars.length)]
  ).join("");
  const suffix = Math.floor(Math.random() * 900) + 100;
  return `${prefix}${suffix}`;
};

const generateParts = (count, type) => {
  return Array.from({ length: count }, () => ({
    partNumber: randomPartName(),
    inventory:
      type === "Runner"
        ? Math.floor(Math.random() * 500) + 500
        : Math.floor(Math.random() * 20) + 1,
  }));
};

const StrangersAndRunners = () => {
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
      x: { display: false },
      y: {
        beginAtZero: true,
        ticks: { color: "#666" },
        grid: { color: "#eee" },
      },
    },
  };

  return (
    <div className="w-full mx-auto">
      <h3 className="pb-2 text-gray-800 font-bold">
        Inventory: Strangers & Runners (Top & Bottom 100 Parts)
      </h3>
      <div className="flex flex-row items-end gap-4 w-full">
        {/* Both chart containers get same height and flex! */}
        <div className="bg-white p-5 flex flex-col gap-4 w-full h-full justify-end">
          <h4 className="text-blue-700 font-semibold mb-2">
            High Volume Inventory (Runners)
          </h4>
          <div className="p-4 w-full h-full flex flex-col justify-end">
            <Bar data={runnersData} options={options} height={200} />
            <div className="text-xs text-gray-600 mt-2">
              Each bar represents a high volume inventory (Runner)
            </div>
          </div>
        </div>
        <div className="bg-white p-5 flex flex-col gap-4 w-full h-full justify-end">
          <h4 className="text-red-700 font-semibold mb-2">
            Low Volume Inventory (Strangers)
          </h4>
          <div className=" p-4 w-full h-full flex flex-col justify-end">
            <Bar data={strangersData} options={options} height={200} />
            <div className="text-xs text-gray-600 mt-2">
              Each bar represents a low volume inventory (Stranger)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrangersAndRunners;