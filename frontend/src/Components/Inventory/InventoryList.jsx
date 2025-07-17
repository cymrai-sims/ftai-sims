import React, { useEffect, useState } from 'react';
import { IoEyeOutline } from "react-icons/io5";
import { GiPencil } from "react-icons/gi";

const InventoryList = () => {
  const [inventories, setInventories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/v1/inventory')
      .then(res => res.json())
      .then(json => {
        setInventories(json.data || []);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-10 bg-white shadow-md">
      <h4 className='font-bold pb-5 text-[var(--dark-main)]'>Inventory Overview</h4>
      <div className="p-6 px-0">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <table className="mt-4 w-full min-w-max table-auto text-left border border-white divide-y divide-white">
            <thead className="bg-blue-gray-50/50 text-white">
              <tr>
                {/* Adjust headings as needed based on your inventory model columns */}
                <th className="border border-white p-4 bg-[var(--dark-main-light)] text-[var(--dark-main)]">
                  <p className="text-sm font-medium">Item</p>
                </th>
                <th className="border border-white p-4 bg-[var(--dark-main-light)] text-[var(--dark-main)]">
                  <p className="text-sm font-medium">Quantity</p>
                </th>
                {/* Add more columns as necessary */}
                <th className="border border-white p-4 bg-[var(--dark-main-light)] text-[var(--dark-main)]">
                  <p className="text-sm font-medium">Actions</p>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white">
              {inventories.map((inv, idx) => (
                <tr key={idx} className="text-[var(--dark-main)]">
                  <td className="border border-gray-900 p-4">
                    <p>{inv.item || inv.name || inv.DESCRIPTION}</p>
                  </td>
                  <td className="border border-gray-900 p-4">
                    <p>{inv.quantity || inv.QTY_OH}</p>
                  </td>
                  {/* Add more <td> as necessary for other fields */}
                  <td className="border border-gray-900 p-4">
                    <div className="flex gap-2">
                      <button className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white px-10 py-3 rounded text-2xl">
                        <IoEyeOutline className="h-4 w-4" />
                        View
                      </button>
                      <button className="flex items-center gap-1 bg-yellow-500 hover:bg-yellow-600 text-white px-10 py-3 rounded text-2xl">
                        <GiPencil className="h-4 w-4" />
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default InventoryList;