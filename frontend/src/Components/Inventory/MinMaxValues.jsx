import React, { useMemo } from "react";

const generateRandomValues = () => ({
  aboveMax: Math.floor(Math.random() * 100) + 50,
  belowMin: Math.floor(Math.random() * 50) + 10,
  target: Math.floor(Math.random() * 80) + 20
});

const BAR_COLORS = {
  aboveMax: "bg-red-500",
  belowMin: "bg-blue-500",
  target: "bg-green-500"
};

const LABELS = {
  aboveMax: "Above Max",
  belowMin: "Below Min",
  target: "Target"
};

const MinMaxValues = () => {
  const values = useMemo(generateRandomValues, []);
  const maxValue = Math.max(values.aboveMax, values.belowMin, values.target);

  return (
    <div className="w-full max-w-xl mx-auto p-6">
      <h4 className="font-bold text-lg mb-6 text-gray-700 pb-10">Min & Max Values</h4>
      {/* Labels section */}
      <div className="mb-6 flex flex-row justify-evenly items-center gap-4 pb-5">
        {Object.keys(LABELS).map((key) => (
          <div key={key} className="flex flex-col items-center">
            <span className={`w-4 h-4 inline-block mb-2 ${BAR_COLORS[key]}`}></span>
            <span className="text-base font-semibold text-gray-800">{LABELS[key]}</span>
          </div>
        ))}
      </div>
      {/* Bar chart with gaps */}
      <div className="flex flex-col space-y-12">
        {Object.keys(values).map((key) => (
          <div key={key} className="flex items-center w-full group relative">
            <div
              className={`h-12 rounded ${BAR_COLORS[key]} transition-all`}
              style={{
                width: `${(values[key] / maxValue) * 100}%`,
                minWidth: "2.5rem"
              }}
            ></div>
            {/* Value appears only on hover */}
            <span className="ml-4 text-xl font-bold text-gray-900 opacity-0 group-hover:opacity-100 pointer-events-none">
              {values[key]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MinMaxValues;