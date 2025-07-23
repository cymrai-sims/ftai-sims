
import React, { useEffect, useState } from 'react';

const InventoryList = () => {
  const [inventories, setInventories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/v1/global_inventory/inventory')
      .then(res => res.json())
      .then(json => {
        setInventories(json.data || []);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h3 className='pb-5 text-[var(--dark-main)] font-bold'>Global Inventory List</h3>
      <div className="p-2">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="mt-4 w-full min-w-max table-auto text-left border border-white divide-y divide-white">
              <thead className="bg-blue-gray-50/50 text-white">
                <tr>
                  <th className="border border-white p-2 bg-[var(--dark-main)] text-white">
                    <p className="text-sm text-white">Part Number</p>
                  </th>
                  <th className="border border-white p-2 bg-[var(--dark-main)] text-white">
                    <p className="text-sm text-white">Part Description</p>
                    </th>
                  <th className="border border-white p-2 bg-[var(--dark-main)] text-white">
                    <p className="text-sm text-white">Quantity On Hand</p>
                  </th>
                  <th className="border border-white p-2 bg-[var(--dark-main)] text-white">
                    <p className="text-sm text-white">Available Quantity</p>
                  </th>
                  <th className="border border-white p-2 bg-[var(--dark-main)] text-white">
                    <p className="text-sm text-white">Reserved Quantity</p>
                  </th>
                  <th className="border border-white p-2 bg-[var(--dark-main)] text-white">
                    <p className="text-sm text-white">Unit Cost</p>
                  </th>
                  <th className="border border-white p-2 bg-[var(--dark-main)] text-white">
                    <p className="text-sm text-white">Total Stock Value</p>
                  </th>
                  <th className="border border-white p-2 bg-[var(--dark-main)] text-white">
                    <p className="text-sm text-white">Condition</p>
                  </th>
                  <th className="border border-white p-2 bg-[var(--dark-main)] text-white">
                    <p className="text-sm text-white">Location</p>
                  </th>
                  <th className="border border-white p-2 bg-[var(--dark-main)] text-white">
                    <p className="text-sm text-white">Warehouse</p>
                  </th>
                  <th className="border border-white p-2 bg-[var(--dark-main)] text-white">
                    <p className="text-sm text-white">Serial Number</p>
                  </th>
                  <th className="border border-white p-2 bg-[var(--dark-main)] text-white">
                    <p className="text-sm text-white">Received Date</p>
                  </th>
                  <th className="border border-white p-2 bg-[var(--dark-main)] text-white">
                    <p className="text-sm text-white">Purchase Order Number</p>
                  </th>
                  <th className="border border-white p-2 bg-[var(--dark-main)] text-white">
                    <p className="text-sm text-white">Repair Order Number</p>
                  </th>
                  <th className="border border-white p-2 bg-[var(--dark-main)] text-white">
                    <p className="text-sm text-white">Unit Of Measure</p>
                  </th>
                  <th className="border border-white p-2 bg-[var(--dark-main)] text-white">
                    <p className="text-sm text-white">Source </p>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white">
                {inventories.map((inv, idx) => (
                  <tr key={idx} className="text-[var(--dark-main)]">
                    <td className="border border-gray-900 p-2"><p>{inv.Part_Number}</p></td>
                    <td className="border border-gray-900 p-2"><p>{inv.Part_Description}</p></td>
                    <td className="border border-gray-900 p-2"><p>{inv.Quantity_On_Hand}</p></td>
                    <td className="border border-gray-900 p-2"><p>{inv.Available_Quantity}</p></td>
                    <td className="border border-gray-900 p-2"><p>{inv.Reserved_Quantity}</p></td>
                    <td className="border border-gray-900 p-2"><p>{inv.Unit_Cost}</p></td>
                    <td className="border border-gray-900 p-2"><p>{inv.Total_Stock_Value}</p></td>
                    <td className="border border-gray-900 p-2"><p>{inv.Condition}</p></td>
                    <td className="border border-gray-900 p-2"><p>{inv.Location}</p></td>
                    <td className="border border-gray-900 p-2"><p>{inv.Warehouse}</p></td>
                    <td className="border border-gray-900 p-2"><p>{inv.Serial_Number}</p></td>
                    <td className="border border-gray-900 p-2"><p>{inv.Received_Date}</p></td>
                    <td className="border border-gray-900 p-2"><p>{inv.Purchase_Order_Number}</p></td>
                    <td className="border border-gray-900 p-2"><p>{inv.Repair_Order_Number}</p></td>
                    <td className="border border-gray-900 p-2"><p>{inv.Unit_Of_Measure}</p></td>
                    <td className="border border-gray-900 p-2"><p>{inv.Source}</p></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default InventoryList;