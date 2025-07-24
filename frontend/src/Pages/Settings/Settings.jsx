import React from "react";

// Avatar, Name, and Role
const avatarUrl =
  "https://ui-avatars.com/api/?name=UrinrinO&background=0D8ABC&color=fff&size=128";
const userName = "UrinrinO";
const userRole = "Inventory Operations Manager";

// Contact Info
const contactInfo = {
  email: "urinrino@example.com",
  phone: "+1 (555) 123-4567",
  location: "Montreal, QC, Canada",
};

// Work Orders Example
const workOrders = [
  { id: "WO-1001", status: "Open", description: "Receive new shipment of runners", due: "2025-07-25" },
  { id: "WO-0987", status: "In Progress", description: "Audit stranger parts in Miami", due: "2025-07-22" },
  { id: "WO-0999", status: "Closed", description: "Transfer parts to AAR", due: "2025-07-19" },
];

// Procurement Requests Example
const procurementRequests = [
  { id: "PR-456", part: "Quantum Rotor", status: "Pending", amount: 150 },
  { id: "PR-457", part: "Turbo Valve", status: "Approved", amount: 80 },
];

// Inventory Stats Example
const inventoryStats = {
  totalParts: 3200,
  runners: 200,
  strangers: 120,
  lastAudit: "2025-07-15",
};

// Recent Activity Example
const activity = [
  { text: "Created new work order WO-1001", date: "2025-07-21" },
  { text: "Approved procurement for Turbo Valve", date: "2025-07-20" },
  { text: "Audited Miami stranger inventory", date: "2025-07-19" },
];

const Settings = () => (
  <div className="w-full mx-auto p-8 bg-white rounded-lg shadow-lg mt-10">
    {/* Top section: Avatar + Name + Role + Contact */}
    <div className="flex flex-col md:flex-row items-center gap-8 py-5">
      <img
        src={avatarUrl}
        alt="User Avatar"
        className="w-32 h-32 rounded-full border-4 border-blue-400 shadow-lg"
      />
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">{userName}</h1>
        <p className="text-gray-600 text-lg mb-2">{userRole}</p>
        <div className="flex flex-col md:flex-row gap-4 items-center md:items-start mt-2">
          <span className="text-gray-500">{contactInfo.email}</span>
          <span className="text-gray-500">{contactInfo.phone}</span>
          <span className="text-gray-500">{contactInfo.location}</span>
        </div>
      </div>
    </div>

    {/* Inventory Stats */}
    <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6 py-5">
      <div className="bg-blue-50 rounded-lg p-4 text-center shadow">
        <div className="text-2xl font-bold text-blue-700">{inventoryStats.totalParts}</div>
        <div className="text-gray-600">Total Parts</div>
      </div>
      <div className="bg-green-50 rounded-lg p-4 text-center shadow">
        <div className="text-2xl font-bold text-green-700">{inventoryStats.runners}</div>
        <div className="text-gray-600">Runners</div>
      </div>
      <div className="bg-red-50 rounded-lg p-4 text-center shadow">
        <div className="text-2xl font-bold text-red-700">{inventoryStats.strangers}</div>
        <div className="text-gray-600">Strangers</div>
      </div>
      <div className="bg-gray-50 rounded-lg p-4 text-center shadow">
        <div className="text-lg font-bold text-gray-700">{inventoryStats.lastAudit}</div>
        <div className="text-gray-600">Last Audit</div>
      </div>
    </div>

    {/* Work Orders */}
    <div className="mt-8 py-5">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Work Orders</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg shadow">
          <thead>
            <tr className="bg-blue-100">
              <th className="py-2 px-4 text-left text-gray-700">ID</th>
              <th className="py-2 px-4 text-left text-gray-700">Status</th>
              <th className="py-2 px-4 text-left text-gray-700">Description</th>
              <th className="py-2 px-4 text-left text-gray-700">Due</th>
            </tr>
          </thead>
          <tbody>
            {workOrders.map((wo) => (
              <tr key={wo.id} className="border-b">
                <td className="py-2 px-4">{wo.id}</td>
                <td className="py-2 px-4">
                  <span className={
                    wo.status === "Open"
                      ? "bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs"
                      : wo.status === "In Progress"
                      ? "bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs"
                      : "bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs"
                  }>
                    {wo.status}
                  </span>
                </td>
                <td className="py-2 px-4">{wo.description}</td>
                <td className="py-2 px-4">{wo.due}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    {/* Procurement Requests */}
    <div className="mt-8 py-5">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Procurement Requests</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg shadow">
          <thead>
            <tr className="bg-green-100">
              <th className="py-2 px-4 text-left text-gray-700">ID</th>
              <th className="py-2 px-4 text-left text-gray-700">Part</th>
              <th className="py-2 px-4 text-left text-gray-700">Status</th>
              <th className="py-2 px-4 text-left text-gray-700">Amount</th>
            </tr>
          </thead>
          <tbody>
            {procurementRequests.map((pr) => (
              <tr key={pr.id} className="border-b">
                <td className="py-2 px-4">{pr.id}</td>
                <td className="py-2 px-4">{pr.part}</td>
                <td className="py-2 px-4">
                  <span className={
                    pr.status === "Approved"
                      ? "bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs"
                      : "bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs"
                  }>
                    {pr.status}
                  </span>
                </td>
                <td className="py-2 px-4">{pr.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    {/* Recent Activity */}
    <div className="mt-8 py-5">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Recent Activity</h2>
      <ul className="list-disc list-inside text-gray-700">
        {activity.map((item, idx) => (
          <li key={idx} className="mb-1">
            <span className="font-medium">{item.text}</span>
            <span className="ml-2 text-gray-500 text-xs">({item.date})</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Settings;