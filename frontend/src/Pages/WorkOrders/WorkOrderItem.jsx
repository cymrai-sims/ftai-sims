import React from 'react';

// Components
import ExampleTable from '../../Components/Inventory/ExampleTable';

const WorkOrder = () => {
  return (
    <div>
      {/* Title Section */}
      <div>
        <h3 className="text-2xl font-bold">KJN032T</h3>
        <p>Status: <span className="font-bold">Completed</span></p>
      </div>

      {/* Headings Section */}
      <div className="flex flex-row gap-5 justify-between w-full pt-10">
        <div className="bg-white w-full h-full">
          <div className="flex flex-row w-full border-b-1 border-white">
            <div className="bg-[var(--dark-main)] w-full text-white p-3">WO Type</div>
            <div className="w-full p-3">--</div>
          </div>
          <div className="flex flex-row w-full border-b-1 border-white">
            <div className="bg-[var(--dark-main)] w-full text-white p-3">Activity</div>
            <div className="w-full p-3">--</div>
          </div>
          <div className="flex flex-row w-full border-b-1 border-white">
            <div className="bg-[var(--dark-main)] w-full text-white p-3">Company Name</div>
            <div className="w-full p-3">--</div>
          </div>
          <div className="flex flex-row w-full border-b-1 border-white">
            <div className="bg-[var(--dark-main)] w-full text-white p-3">Company Ref #</div>
            <div className="w-full p-3">--</div>
          </div>
        </div>
        <div className="bg-white w-full h-full">
          <div className="flex flex-row w-full border-b-1 border-white">
            <div className="bg-[var(--dark-main)] w-full text-white p-3">Code</div>
            <div className="w-full p-3">--</div>
          </div>
          <div className="flex flex-row w-full border-b-1 border-white">
            <div className="bg-[var(--dark-main)] w-full text-white p-3">Site</div>
            <div className="w-full p-3">--</div>
          </div>
          <div className="flex flex-row w-full border-b-1 border-white">
            <div className="bg-[var(--dark-main)] w-full text-white p-3">Unit Price</div>
            <div className="w-full p-3">--</div>
          </div>
          <div className="flex flex-row w-full border-b-1 border-white">
            <div className="bg-[var(--dark-main)] w-full text-white p-3">Condition</div>
            <div className="w-full p-3">--</div>
          </div>
        </div>
        <div className="bg-white w-full h-full">
          <div className="flex flex-row w-full border-b-1 border-white">
            <div className="bg-[var(--dark-main)] w-full text-white p-3">Qty Needed</div>
            <div className="w-full p-3">--</div>
          </div>
          <div className="flex flex-row w-full border-b-1 border-white">
            <div className="bg-[var(--dark-main)] w-full text-white p-3">Qty Issued</div>
            <div className="w-full p-3">--</div>
          </div>
          <div className="flex flex-row w-full border-b-1 border-white">
            <div className="bg-[var(--dark-main)] w-full text-white p-3">Qty Turned-In</div>
            <div className="w-full p-3">--</div>
          </div>
        </div>
        <div className="bg-white w-full h-full">
          <div className="flex flex-row w-full border-b-1 border-white">
            <div className="bg-[var(--dark-main)] w-full text-white p-3">Entry Date</div>
            <div className="w-full p-3">--</div>
          </div>
          <div className="flex flex-row w-full border-b-1 border-white">
            <div className="bg-[var(--dark-main)] w-full text-white p-3">Due Date</div>
            <div className="w-full p-3">--</div>
          </div>
        </div>
      </div>

      {/* Table section */}
      <div className="py-10">
        <ExampleTable />
      </div>
    </div>
  )
}

export default WorkOrder
