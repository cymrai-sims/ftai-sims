import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import ExampleTable from "../../Components/Inventory/ExampleTable";

const marketPriceData = [
  { name: "Jul 24", pv: 2400 },
  { name: "Aug 24", pv: 3200 },
  { name: "Sep 24", pv: 1800 },
  { name: "Oct 24", pv: 2700 },
  { name: "Nov 24", pv: 2750 },
  { name: "Dec 24", pv: 1800 },
  { name: "Jan", pv: 2400 },
  { name: "Feb", pv: 1398 },
  { name: "Mar", pv: 9800 },
  { name: "Apr", pv: 3908 },
  { name: "May", pv: 4800 },
  { name: "Jun", pv: 3800 },
  { name: "Jul", pv: 4300 },
];

const demandData = [
  { name: "Jul 24", demand: 80 },
  { name: "Aug 24", demand: 42 },
  { name: "Sep 24", demand: 28 },
  { name: "Oct 24", demand: 39 },
  { name: "Nov 24", demand: 60 },
  { name: "Dec 24", demand: 25 },
  { name: "Jan", demand: 30 },
  { name: "Feb", demand: 22 },
  { name: "Mar", demand: 15 },
  { name: "Apr", demand: 44 },
  { name: "May", demand: 37 },
  { name: "Jun", demand: 53 },
  { name: "Jul", demand: 56 },
];

const InventoryItem = () => {
  return (
    <div>
      <div>
        <h3 className="text-2xl font-bold">ONFOD450J</h3>
        <h3 className="py-3">
          Name: <span className="font-bold">Blade Shaft</span>
        </h3>

        <div className="flex flex-row gap-5 justify-between w-full pt-5">
          {/* <div className="flex flex-row gap-5 justify-between bg-white w-full py-5 px-10">
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
          </div> */}

          <div className="w-full space-y-5">
            <div className="flex flex-row gap-5">
              <div className="bg-white w-1/2">
                <div className="flex flex-row w-full border-b-1 border-white">
                  <div className="bg-[var(--dark-main)] w-full text-white p-3">
                    Part Group
                  </div>
                  <div className="w-full p-3">--</div>
                </div>
                <div className="flex flex-row w-full border-b-1 border-white">
                  <div className="bg-[var(--dark-main)] w-full text-white p-3">
                    Module
                  </div>
                  <div className="w-full p-3">--</div>
                </div>
                <div className="flex flex-row w-full border-b-1 border-white">
                  <div className="bg-[var(--dark-main)] w-full text-white p-3">
                    Material Group
                  </div>
                  <div className="w-full p-3">--</div>
                </div>
                <div className="flex flex-row w-full border-b-1 border-white">
                  <div className="bg-[var(--dark-main)] w-full text-white p-3">
                    Material Sub Group
                  </div>
                  <div className="w-full p-3">--</div>
                </div>
              </div>

              <div className="bg-white w-1/2">
                <div className="flex flex-row w-full border-b-1 border-white">
                  <div className="bg-[var(--dark-main)] w-full text-white p-3">
                    Average Annual Demand
                  </div>
                  <div className="w-full p-3">--</div>
                </div>
                <div className="flex flex-row w-full border-b-1 border-white">
                  <div className="bg-[var(--dark-main)] w-full text-white p-3">
                    Average Weekly Demand
                  </div>
                  <div className="w-full p-3">--</div>
                </div>
                <div className="flex flex-row w-full border-b-1 border-white">
                  <div className="bg-[var(--dark-main)] w-full text-white p-3">
                    Average Daily Demand
                  </div>
                  <div className="w-full p-3">--</div>
                </div>
                <div className="flex flex-row w-full border-b-1 border-white">
                  <div className="bg-[var(--dark-main)] w-full text-white p-3">
                    Average Lead Time
                  </div>
                  <div className="w-full p-3">--</div>
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-5">
              <div className="bg-white w-1/2">
                <div className="flex flex-row w-full border-b-1 border-white">
                  <div className="bg-[var(--dark-main)] w-full text-white p-3">
                    Min
                  </div>
                  <div className="w-full p-3">--</div>
                </div>
                <div className="flex flex-row w-full border-b-1 border-white">
                  <div className="bg-[var(--dark-main)] w-full text-white p-3">
                    Max
                  </div>
                  <div className="w-full p-3">--</div>
                </div>
              </div>

              <div className="bg-white w-1/2">
                <div className="flex flex-row w-full border-b-1 border-white">
                  <div className="bg-[var(--dark-main)] w-full text-white p-3">
                    Book Value
                  </div>
                  <div className="w-full p-3">--</div>
                </div>
                <div className="flex flex-row w-full border-b-1 border-white">
                  <div className="bg-[var(--dark-main)] w-full text-white p-3">
                    Average Market Price
                  </div>
                  <div className="w-full p-3">--</div>
                </div>
                <div className="flex flex-row w-full border-b-1 border-white">
                  <div className="bg-[var(--dark-main)] w-full text-white p-3">
                    Average Unit Price
                  </div>
                  <div className="w-full p-3">--</div>
                </div>
                <div className="flex flex-row w-full border-b-1 border-white">
                  <div className="bg-[var(--dark-main)] w-full text-white p-3">
                    Average Unit Cost
                  </div>
                  <div className="w-full p-3">--</div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-5">
              <div className="bg-white w-1/2">
                <div className="flex flex-row w-full border-b-1 border-white">
                  <div className="bg-[var(--dark-main)] w-full text-white p-3">
                    Qty AV
                  </div>
                  <div className="w-full p-3">--</div>
                </div>
                <div className="flex flex-row w-full border-b-1 border-white">
                  <div className="bg-[var(--dark-main)] w-full text-white p-3">
                    Qty WO
                  </div>
                  <div className="w-full p-3">--</div>
                </div>
                <div className="flex flex-row w-full border-b-1 border-white">
                  <div className="bg-[var(--dark-main)] w-full text-white p-3">
                    Qty PO
                  </div>
                  <div className="w-full p-3">--</div>
                </div>
                <div className="flex flex-row w-full border-b-1 border-white">
                  <div className="bg-[var(--dark-main)] w-full text-white p-3">
                    Qty RO
                  </div>
                  <div className="w-full p-3">--</div>
                </div>
                <div className="flex flex-row w-full border-b-1 border-white">
                  <div className="bg-[var(--dark-main)] w-full text-white p-3">
                    Qty SO
                  </div>
                  <div className="w-full p-3">--</div>
                </div>
              </div>

            </div>
          </div>

          {/* Graphs */}
          <div className="flex flex-col gap-2 w-full bg-white p-5">
            <div>
              <h2 className="text-xl font-bold mb-4">Market Price</h2>
              <LineChart
                width={800}
                height={250}
                data={marketPriceData}
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
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#1296BA"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </div>

            <div className="mt-5">
              <h2 className="text-xl font-bold mb-4">Demand</h2>
              <LineChart
                width={800}
                height={250}
                data={demandData}
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
                <Line
                  type="monotone"
                  dataKey="demand"
                  stroke="#F36B21"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 bg-white p-5 mt-5">
          <ExampleTable />
        </div>
      </div>
    </div>
  );
};

export default InventoryItem;
