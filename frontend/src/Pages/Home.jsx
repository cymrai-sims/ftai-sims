import React from 'react';

// Components
import Notification from '../Components/Notification';
import InventoryValueChart from '../Components/InventoryValueChart';
import HistoricValueChart from '../Components/HistoricValueChart';
import Inventory from '../Components/InventoryList';

// Icons
import { RiCustomerService2Line } from "react-icons/ri";
import { HiUsers } from "react-icons/hi2";
import { IoReceipt } from "react-icons/io5";
import { FaMoneyBills } from "react-icons/fa6";

const notificationData = [
  { title: 'Customers', value: '1,240', change: '+2.7%', icon: <HiUsers className="text-[var(--blue-main)] text-3xl" /> },
  { title: 'Support Tickets', value: '58', change: '-0.5%', icon: <RiCustomerService2Line className="text-[var(--blue-main)] text-3xl" /> },
  { title: 'Orders', value: '320', change: '+1.2%', icon: <IoReceipt className="text-[var(--blue-main)] text-3xl" /> },
  { title: 'Revenue', value: '$12,400', change: '+4.8%', icon: <FaMoneyBills className="text-[var(--blue-main)] text-3xl" /> },
];

const Home = () => {

  const inventoryValueData = [
    { label: "Montreal", value: 90 },
    { label: "Miami", value: 30 },
    { label: "AAR", value: 50 },
  ];

  const inventoryValueColors = [
    getComputedStyle(document.documentElement).getPropertyValue('--dark-main').trim(),
    getComputedStyle(document.documentElement).getPropertyValue('--blue-main').trim(),
    getComputedStyle(document.documentElement).getPropertyValue('--orange-main').trim(),
  ];

  const labels = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  const data = [
    1200, 1500, 1700, 1400, 1900, 2200, 2100, 2500, 2300, 2600, 2800, 3000
  ];
  
  const salesColor = "rgba(2, 27, 44, 1)";

  return (
    <div className='flex flex-col px-10 py-5'>
      <h3 className='font-bold mt-3 pb-5 text-2xl text-[var(--dark-main)]'>Dashboard</h3>
      <div className="flex flex-row gap-4 mt-10">
        {notificationData.map((item, index) => (
          <div key={index} className="w-1/4">
            <Notification
              title={item.title}
              value={item.value}
              change={item.change}
              icon={item.icon}
            />
          </div>
        ))}
      </div>

      <div className="charts flex flex-row gap-3 py-10">
        <div className="w-2/5 bg-white px-10 py-5">
          <p className='text-[var(--dark-main)] py-3'>Value Statistics</p>
          <InventoryValueChart data={inventoryValueData} colors={inventoryValueColors} />
        </div>

        <div className="w-3/5 bg-white px-10 py-5">
          <p className='text-[var(--dark-main)] py-3'>Sales Overview</p>
          <HistoricValueChart labels={labels} data={data} borderColor="rgb(4, 46, 73)" fill="false" />
        </div>
      </div>

      <Inventory/>
    </div>
  );
};

export default Home;