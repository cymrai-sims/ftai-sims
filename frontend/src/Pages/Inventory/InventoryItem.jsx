import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jul 24',
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Aug 24',
    pv: 3200,
    amt: 2400,
  },
  {
    name: 'Sep 24',
    pv: 1800,
    amt: 2400,
  },
  {
    name: 'Oct 24',
    pv: 2700,
    amt: 2400,
  },
  {
    name: 'Nov 24',
    pv: 2750,
    amt: 2400,
  },
  {
    name: 'Dec 24',
    pv: 1800,
    amt: 2400,
  },
  {
    name: 'Jan',
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Jul',
    pv: 4300,
    amt: 2100,
  },
];

const InventoryItem = () => {
  return (
    <div>
      <div>
      <h1>ONFOD450J</h1>
      <h3 className="py-3">Name: <span className="font-bold">Blade Shaft</span></h3>

      
      <div className="flex flex-row gap-5 justify-between w-full pt-5">
        <div className="flex flex-row gap-5 justify-between bg-white w-full py-5 px-10">
          <div className="flex flex-col gap-3">
            <p className="text-lg">Part Group: <span className="font-bold">Engine Parts</span></p>
            <p className="text-lg">Module: <span className="font-bold">Shafts</span></p>
            <p className="text-lg">Material Group: <span className="font-bold">Pieces</span></p>
            <p className="text-lg">Material Sub-Group: <span className="font-bold">Pieces</span></p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-lg">Location: <span className="font-bold">Warehouse A</span></p>
            <p className="text-lg">Quantity: <span className="font-bold">150</span></p>
            <p className="text-lg">Min Quantity: <span className="font-bold">50</span></p>
          </div>
        </div>

        {/* Graphs */}
        <div className="flex flex-col gap-2 w-full bg-white p-5">
          <h2 className="text-xl font-bold mb-4">Market Price</h2>
          <LineChart
            width={800}
            height={500}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="pv" stroke="#1296BA" activeDot={{ r: 8 }} />
          </LineChart>
        </div>
      </div>

      <div className="flex flex-col gap-5 bg-white p-5 mt-5">
            <h2>po</h2>
            <h2>po</h2>
            <h2>po</h2>
            <h2>po</h2>
      </div>
    </div>
      
    </div>
  )
}

export default InventoryItem
