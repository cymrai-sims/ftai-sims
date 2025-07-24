import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Label, CartesianGrid, Cell
} from "recharts";

// Dataset for module repair costs
const data = [
  { module: "CORE", cost: 3200000000 },
  { module: "FAN", cost: 1900000000 },
  { module: "QEC / LRU", cost: 1600000000 },
  { module: "LPT", cost: 1100000000 },
  { module: "Non-HVM", cost: 500000000 },
];

// Colors for each module type
const colors = [
  "#24134f", // CORE (deep purple)
  "#6d2874", // FAN (purple)
  "#b44e7a", // QEC / LRU (pink)
  "#e97b76", // LPT (orange-pink)
  "#eeb383"  // Non-HVM (orange)
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-200 rounded shadow p-2 text-xs">
        <div className="font-semibold">{label}</div>
        <div>
          Total Repair Ext Cost: <span className="font-bold">${payload[0].value.toLocaleString()}</span>
        </div>
      </div>
    );
  }
  return null;
};

const ModuleRepairCost = () => (
  <div className="w-full h-[400px] p-4 flex flex-col items-stretch">
    <h3 className="text-black pb-5 font-bold mb-4 pb-2">
      Top Modules by Total Repair Cost
    </h3>
    <div className="flex-1">
      <ResponsiveContainer className={"w-full h-full"}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 10, right: 40, left: 80, bottom: 40 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            type="number"
            tickFormatter={value => `${(value / 1e9).toFixed(1)}e9`}
            domain={[0, 'dataMax']}
          >
            <Label
              value="Total Repair Ext Cost"
              offset={25}
              position="bottom"
              className="text-base font-semibold"
            />
          </XAxis>
          <YAxis
            type="category"
            dataKey="module"
            width={120}
            tick={{ fontSize: 14, fontWeight: 'bold' }}
          >
            <Label
              value="Module"
              angle={-90}
              position="insideLeft"
              style={{ textAnchor: 'middle', fontWeight: 600, fontSize: 16 }}
            />
          </YAxis>
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="cost"
            barSize={32}
            label={{
              position: "right",
              formatter: (value) => `$${value.toLocaleString()}`,
              fontSize: 13
            }}
          >
            {data.map((entry, index) => (
              <Cell key={entry.module} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default ModuleRepairCost;