import React from 'react';
import ChatButton from "../AI/ChatButton";

const InventoryValues = () => {
  const labels = ["Inventory Value", "On Hand Value", "PO Value", "Reserved Value"];
  const data = [14200, 5000, 2500, 6700];

  return (
    <div className='p-2 relative group'>

      {/* ChatButton shown only on hover */}
      <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <ChatButton onClick={() => alert('Chat opened')} />
      </div>

      <h3 className="pb-3 font-bold">Total Inventory Value</h3>
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