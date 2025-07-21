import React, { useMemo, useState } from 'react';

// Utility to generate random integer between min and max, inclusive
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Utility to generate fake data for 250 items
const generateTableData = () => {
  const engines = ['CFM56', 'V2500', 'PW100', 'LEAP', 'GE90'];
  const modules = ['Compressor', 'Turbine', 'Fan', 'Combustor', 'Nozzle'];
  const partPrefixes = ['CHU', 'PWR', 'VTI', 'LEP', 'GEN'];
  const descriptions = [
    'Inlet Guide Vane',
    'High Pressure Turbine Blade',
    'Low Pressure Fan',
    'Fuel Nozzle',
    'Combustor Liner'
  ];

  const tableRows = [];
  for (let i = 1; i <= 250; i++) {
    const partNo = `${partPrefixes[randomInt(0, partPrefixes.length - 1)]}${randomInt(1000, 9999)}${String.fromCharCode(65 + randomInt(0, 25))}`;
    const partDesc = descriptions[randomInt(0, descriptions.length - 1)];
    const engine = engines[randomInt(0, engines.length - 1)];
    const module = modules[randomInt(0, modules.length - 1)];
    const qtyAV = randomInt(0, 50);
    const qtyWO = randomInt(0, 30);
    const qtyPO = randomInt(0, 20);
    const qtyRO = randomInt(0, 10);
    const qtySO = randomInt(0, 5);

    // Set min and max thresholds
    const minLevel = randomInt(5, 20);
    const maxLevel = minLevel + randomInt(10, 30);

    // Calculate stock level (simulate real stock levels)
    const stockLevel = qtyAV + qtyPO - qtySO + qtyRO;

    // Determine stock status
    let stockStatus = '';
    if (stockLevel > maxLevel) stockStatus = 'Above Max';
    else if (stockLevel < minLevel) stockStatus = 'Below Min';
    else stockStatus = 'Within Range';

    tableRows.push({
      partNo,
      partDesc,
      engine,
      module,
      qtyAV,
      qtyWO,
      qtyPO,
      qtyRO,
      qtySO,
      stockLevel,
      stockStatus,
      minLevel,
      maxLevel
    });
  }
  return tableRows;
};

const STATUS_ORDER = ['Above Max', 'Within Range', 'Below Min'];

const MinMaxTable = () => {
  // Memoize data so it's not regenerated on every render
  const tableRows = useMemo(generateTableData, []);
  const [toggleOrder, setToggleOrder] = useState(true); // true: Above->Within->Below, false: Below->Within->Above

  // Sort tableRows by status according to toggleOrder
  const sortedRows = useMemo(() => {
    const order = toggleOrder ? STATUS_ORDER : [...STATUS_ORDER].reverse();
    return tableRows.slice().sort((a, b) => {
      const statusA = order.indexOf(a.stockStatus);
      const statusB = order.indexOf(b.stockStatus);
      if (statusA !== statusB) return statusA - statusB;
      return b.stockLevel - a.stockLevel; // secondary: higher stock level first
    });
  }, [tableRows, toggleOrder]);

  return (
    <div>
      <h3 className='pb-2 text-[var(--dark-main)] font-bold'>Current Inventory Min/Max Levels</h3>
      <div className="p-2">
        <div className="flex items-center justify-between mb-5">
          <div className="text-sm text-gray-700">
            Arrangement:&nbsp;
            <span className="font-bold">
              {toggleOrder ? 'Above Max → Within Range → Below Min' : 'Below Min → Within Range → Above Max'}
            </span>
          </div>
          <button
            onClick={() => setToggleOrder((t) => !t)}
            className="px-3 py-1 bg-[var(--dark-main)] text-white rounded hover:bg-[var(--dark-main-mid)] transition"
          >
            Switch Order
          </button>
        </div>
        <div className="overflow-x-auto py-5">
          <table className="mt-2 w-full min-w-max table-auto text-left border border-white divide-y divide-white">
            <thead className="bg-blue-gray-50/50 text-white">
              <tr>
                <th className="border border-white p-2 bg-[var(--dark-main)] text-white text-sm">Part No</th>
                <th className="border border-white p-2 bg-[var(--dark-main)] text-white text-sm">Description</th>
                <th className="border border-white p-2 bg-[var(--dark-main)] text-white text-sm">Engine</th>
                <th className="border border-white p-2 bg-[var(--dark-main)] text-white text-sm">Module</th>
                <th className="border border-white p-2 bg-[var(--dark-main)] text-white text-sm">Qty AV</th>
                <th className="border border-white p-2 bg-[var(--dark-main)] text-white text-sm">Qty WO</th>
                <th className="border border-white p-2 bg-[var(--dark-main)] text-white text-sm">Qty PO</th>
                <th className="border border-white p-2 bg-[var(--dark-main)] text-white text-sm">Qty RO</th>
                <th className="border border-white p-2 bg-[var(--dark-main)] text-white text-sm">Qty SO</th>
                <th className="border border-white p-2 bg-[var(--dark-main)] text-white text-sm">Stock Level</th>
                <th className="border border-white p-2 bg-[var(--dark-main)] text-white text-sm">Min</th>
                <th className="border border-white p-2 bg-[var(--dark-main)] text-white text-sm">Max</th>
                <th className="border border-white p-2 bg-[var(--dark-main)] text-white text-sm">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white">
              {sortedRows.map((row, idx) => (
                <tr key={idx} className="text-[var(--dark-main)]">
                  <td className="border border-gray-900 p-2">{row.partNo}</td>
                  <td className="border border-gray-900 p-2">{row.partDesc}</td>
                  <td className="border border-gray-900 p-2">{row.engine}</td>
                  <td className="border border-gray-900 p-2">{row.module}</td>
                  <td className="border border-gray-900 p-2">{row.qtyAV}</td>
                  <td className="border border-gray-900 p-2">{row.qtyWO}</td>
                  <td className="border border-gray-900 p-2">{row.qtyPO}</td>
                  <td className="border border-gray-900 p-2">{row.qtyRO}</td>
                  <td className="border border-gray-900 p-2">{row.qtySO}</td>
                  <td className="border border-gray-900 p-2">{row.stockLevel}</td>
                  <td className="border border-gray-900 p-2">{row.minLevel}</td>
                  <td className="border border-gray-900 p-2">{row.maxLevel}</td>
                  <td className="border border-gray-900 p-2">
                    <span className={
                      row.stockStatus === 'Above Max' ? 'text-red-700 font-bold' :
                      row.stockStatus === 'Below Min' ? 'text-yellow-700 font-bold' :
                      'text-[var(--dark-main)] font-bold'
                    }>
                      {row.stockStatus}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-2 text-xs text-gray-500">
            Showing {sortedRows.length} items. Status colors: <span className="text-red-700 font-bold">Above Max</span>, <span className="text-[var(--dark-main)] font-bold">Within Range</span>, <span className="text-yellow-700 font-bold">Below Min</span>.
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinMaxTable;