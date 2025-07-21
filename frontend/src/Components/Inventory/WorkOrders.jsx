
import React, { useEffect, useState } from 'react';

const WorkOrders = () => {

  return (
    <div>
      <h3 className='pb-2 text-[var(--dark-main)] font-bold'>Current Work Orders</h3>
      <div className="p-2">
          <div className="overflow-x-auto">
            <table className="mt-4 w-full min-w-max table-auto text-left border border-white divide-y divide-white">
              <thead className="bg-blue-gray-50/50 text-white">
                <tr>
                    <th className="border border-white p-2 bg-[var(--dark-main)] text-white">
                        <p className="text-sm text-white">Order No</p>
                    </th>
                    <th className="border border-white p-2 bg-[var(--dark-main)] text-white">
                        <p className="text-sm text-white">Vendor</p>
                    </th>
                    <th className="border border-white p-2 bg-[var(--dark-main)] text-white">
                        <p className="text-sm text-white">Engine</p>
                    </th>
                    <th className="border border-white p-2 bg-[var(--dark-main)] text-white">
                        <p className="text-sm text-white">Due Date</p>
                    </th>
                    <th className="border border-white p-2 bg-[var(--dark-main)] text-white">
                        <p className="text-sm text-white">Status</p>
                    </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white">
                  <tr className="text-[var(--dark-main)]">
                    <td className="border border-gray-900 p-2"><p>CHUZT1A</p></td>
                    <td className="border border-gray-900 p-2"><p>Airline A</p></td>
                    <td className="border border-gray-900 p-2"><p>CFM56</p></td>
                    <td className="border border-gray-900 p-2"><p>July 1, 2025</p></td>
                    <td className="border border-gray-900 p-2"><p className="text-green-500">Complete</p></td>
                  </tr>
                  <tr className="text-[var(--dark-main)]">
                    <td className="border border-gray-900 p-2"><p>CHUZT1A</p></td>
                    <td className="border border-gray-900 p-2"><p>Airline A</p></td>
                    <td className="border border-gray-900 p-2"><p>CFM56</p></td>
                    <td className="border border-gray-900 p-2"><p>July 30, 2025</p></td>
                    <td className="border border-gray-900 p-2"><p className="text-gray-900">In Progress</p></td>
                  </tr>
                  <tr className="text-[var(--dark-main)]">
                    <td className="border border-gray-900 p-2"><p>CHUZT1A</p></td>
                    <td className="border border-gray-900 p-2"><p>Airline A</p></td>
                    <td className="border border-gray-900 p-2"><p>CFM56</p></td>
                    <td className="border border-gray-900 p-2"><p>July 15, 2025</p></td>
                    <td className="border border-gray-900 p-2"><p className="text-green-500">Complete</p></td>
                  </tr>
                  <tr className="text-[var(--dark-main)]">
                    <td className="border border-gray-900 p-2"><p>CHUZT1A</p></td>
                    <td className="border border-gray-900 p-2"><p>Airline A</p></td>
                    <td className="border border-gray-900 p-2"><p>CFM56</p></td>
                    <td className="border border-gray-900 p-2"><p>July 1, 2025</p></td>
                    <td className="border border-gray-900 p-2"><p className="text-red-500">Not Started</p></td>
                  </tr>
                  <tr className="text-[var(--dark-main)]">
                    <td className="border border-gray-900 p-2"><p>CHUZT1A</p></td>
                    <td className="border border-gray-900 p-2"><p>Airline A</p></td>
                    <td className="border border-gray-900 p-2"><p>CFM56</p></td>
                    <td className="border border-gray-900 p-2"><p>August 12, 2025</p></td>
                    <td className="border border-gray-900 p-2"><p className="text-gray-900">In Progress</p></td>
                  </tr>
                  <tr className="text-[var(--dark-main)]">
                    <td className="border border-gray-900 p-2"><p>CHUZT1A</p></td>
                    <td className="border border-gray-900 p-2"><p>Airline A</p></td>
                    <td className="border border-gray-900 p-2"><p>CFM56</p></td>
                    <td className="border border-gray-900 p-2"><p>July 28, 2025</p></td>
                    <td className="border border-gray-900 p-2"><p className="text-gray-900">In Progress</p></td>
                  </tr>
              </tbody>
            </table>
          </div>
      </div>
    </div>
  );
};

export default WorkOrders;