import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Label,
} from "recharts";

// Static monthly repair cost data to match image4
const data = [
  { month: "2025-01", cost: 800000000 },
  { month: "2025-02", cost: 1600000000 },
  { month: "2025-03", cost: 1620000000 },
  { month: "2025-04", cost: 1650000000 },
  { month: "2025-05", cost: 1350000000 },
  { month: "2025-06", cost: 1300000000 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-200 rounded shadow p-2 text-xs">
        <div className="font-semibold">{label}</div>
        <div>
          Total Repair Cost:{" "}
          <span className="font-bold">
            ${payload[0].value.toLocaleString()}
          </span>
        </div>
      </div>
    );
  }
  return null;
};

const MonthlyRepairCost = () => (
  <div className="w-full h-[400px] p-4 pb-5 flex flex-col items-stretch">
    <h3 className="text-black pb-5 font-bold mb-4 pb-2">
      Top Modules by Total Repair Cost
    </h3>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{ top: 30, right: 40, left: 60, bottom: 40 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="month"
          tick={{ fontSize: 13 }}
          angle={-30}
          textAnchor="end"
        >
          <Label
            value="Month"
            offset={25}
            position="bottom"
            className="text-base font-semibold"
          />
        </XAxis>
        <YAxis
          tickFormatter={(value) => `${(value / 1e9).toFixed(1)}e9`}
          domain={[0, "dataMax"]}
        >
          <Label
            value="Total Repair Cost"
            angle={-90}
            position="insideLeft"
            style={{ textAnchor: "middle", fontWeight: 600, fontSize: 16 }}
          />
        </YAxis>
        <Tooltip content={<CustomTooltip />} />
        <Bar
          dataKey="cost"
          barSize={48}
          fill="#072E40"
          label={{
            position: "top",
            formatter: (value) => `$${value.toLocaleString()}`,
            fontSize: 12,
          }}
        />
        {/* <Label
          value="Total Repair Cost Per Month"
          position="top"
          offset={10}
          className={`align-left mb-5 text-gray-800`}
        /> */}
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default MonthlyRepairCost;
