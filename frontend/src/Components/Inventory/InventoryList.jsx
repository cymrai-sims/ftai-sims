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
    <div>
      <h4 className='pb-5 text-[var(--dark-main)]'>Global Inventory List</h4>
      <div className="p-6 px-0">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <table className="mt-4 w-full min-w-max table-auto text-left border border-white divide-y divide-white">
            <thead className="bg-blue-gray-50/50 text-white">
              <tr>
                {/* Adjust headings as needed based on your inventory model columns */}
                <th className="border border-white p-4 bg-[var(--dark-main-light)] text-[var(--dark-main)]">
                  <p className="text-sm font-medium">PN</p>
                </th>
                <th className="border border-white p-4 bg-[var(--dark-main-light)] text-[var(--dark-main)]">
                  <p className="text-sm font-medium">Description</p>
                </th>
                <th className="border border-white p-4 bg-[var(--dark-main-light)] text-[var(--dark-main)]">
                  <p className="text-sm font-medium">Source</p>
                </th>
                <th className="border border-white p-4 bg-[var(--dark-main-light)] text-[var(--dark-main)]">
                  <p className="text-sm font-medium">Warehouse</p>
                </th>
                <th className="border border-white p-4 bg-[var(--dark-main-light)] text-[var(--dark-main)]">
                  <p className="text-sm font-medium">Condition</p>
                </th>
                <th className="border border-white p-4 bg-[var(--dark-main-light)] text-[var(--dark-main)]">
                  <p className="text-sm font-medium">Category</p>
                </th>
                <th className="border border-white p-4 bg-[var(--dark-main-light)] text-[var(--dark-main)]">
                  <p className="text-sm font-medium">Status</p>
                </th>
                <th className="border border-white p-4 bg-[var(--dark-main-light)] text-[var(--dark-main)]">
                  <p className="text-sm font-medium">On order</p>
                </th>
                <th className="border border-white p-4 bg-[var(--dark-main-light)] text-[var(--dark-main)]">
                  <p className="text-sm font-medium">Quantity</p>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white">
              {inventories.map((inv, idx) => (
                <tr key={idx} className="text-[var(--dark-main)]">
                  <td className="border border-gray-900 p-4">
                    <p>{inv.STOCK_LINE}</p>
                  </td>
                  <td className="border border-gray-900 p-4">
                    <p>{inv.DESCRIPTION}</p>
                  </td>
                  <td className="border border-gray-900 p-4">
                    <p>{inv.MANUFACTURER}</p>
                  </td>
                  <td className="border border-gray-900 p-4">
                    <p>{inv.WAREHOUSE_CODE}</p>
                  </td>
                  <td className="border border-gray-900 p-4">
                    <p>{inv.Condition}</p>
                  </td>
                  <td className="border border-gray-900 p-4">
                    <p>{inv.STOCK_CATEGORY_CODE}</p>
                  </td>
                  <td className="border border-gray-900 p-4">
                    <p>{inv.RESERVED}</p>
                  </td>
                  <td className="border border-gray-900 p-4">
                    <p>{inv.QTY_RESERVED}</p>
                  </td>
                  <td className="border border-gray-900 p-4">
                    <p>{inv.QTY_OH}</p>
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