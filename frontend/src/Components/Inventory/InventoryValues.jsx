import React from 'react';

const InventoryValues = () => {
  const labels = ["Inventory Value", "On Hand Value", "PO Value", "Reserved Value"];
  const data = [14200000, 5000000, 2500000, 6700000];

  return (
    <div className="p-4">
      <h4 className="pb-10 text-xl">Total Inventory Value</h4>
      <ul className="space-y-4 inventory-list">
        {labels.map((label, index) => (
          <li
            key={label}
            className="flex flex-row justify-between border-b border-gray-300 py-3"
          >
            <span>
              {label}
            </span>
            <span>
              <b>{data[index] !== undefined ? `$${data[index].toLocaleString()}` : '-'}</b>
            </span>
          </li>
        ))}
        {/* Divider after the last item */}
        <li className="border-b border-gray-300"></li>
      </ul>
    </div>
  );
};

export default InventoryValues;