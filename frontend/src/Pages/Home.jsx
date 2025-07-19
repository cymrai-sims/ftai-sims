import React from 'react';

// Components
import Notification from '../Components/Notification';
import InventoryValueChart from '../Components/Inventory/InventoryValueChart';
import HistoricValueChart from '../Components/Inventory/HistoricValueChart';
import InventoryList from '../Components/Inventory/InventoryList';
import InventoryValues from '../Components/Inventory/InventoryValues';
import InventoryStoreValues from '../Components/Inventory/InventoryStoreValues';
import MinMaxValues from '../Components/Inventory/MinMaxValues';

// Icons
import { RiCustomerService2Line } from "react-icons/ri";
import { HiUsers } from "react-icons/hi2";
import { IoReceipt } from "react-icons/io5";
import { FaMoneyBills } from "react-icons/fa6";

const notificationData = [
  { title: 'Customers', value: '1,240', change: '+2.7%', icon: <HiUsers className="text-[var(--blue-main)] text-3xl" /> },
  { title: 'Support Tickets', value: '58', change: '-0.5%', icon: <RiCustomerService2Line className="text-[var(--blue-main)] text-3xl" /> },
  { title: 'Orders', value: '320', change: '+1.2%', icon: <IoReceipt className="text-[var(--blue-main)] text-3xl" /> },
  { title: 'Revenue', value: '$12,000,400', change: '+4.8%', icon: <FaMoneyBills className="text-[var(--blue-main)] text-3xl" /> },
];

const Home = () => {

  const inventoryValueData = [
    { label: "Montreal", value: 120000 },
    { label: "Miami", value: 42000 },
    { label: "AAR", value: 65000 },
  ];

  const inventoryValueColors = [
    getComputedStyle(document.documentElement).getPropertyValue('--dark-main').trim(),
    getComputedStyle(document.documentElement).getPropertyValue('--blue-main').trim(),
    getComputedStyle(document.documentElement).getPropertyValue('--orange-main').trim(),
  ];

  return (
    <div className='flex flex-col px-10 py-5 gap-5'>
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

      <div className="charts flex flex-row gap-3">
        <div className="w-2/5 bg-white px-10 py-5">
          <p className='text-[var(--dark-main)] py-3'>Value Statistics</p>
          <InventoryValueChart data={inventoryValueData} colors={inventoryValueColors} />
        </div>

        <div className="w-3/5 bg-white px-10 py-5">
          <p className='text-[var(--dark-main)] py-3'>Historic Inventory Value Overview</p>
          <HistoricValueChart />
        </div>
      </div>

      <div className="flex flex-row gap-5">
        <div className="w-1/4 bg-white px-5 py-5">
          <InventoryValues/>
        </div>
        <div className="w-3/4 bg-white px-5 py-5">
          <InventoryStoreValues/>
        </div>
      </div>

      <div className="flex flex-row gap-5">
        <div className="w-1/3 bg-white px-5 py-5">
          <MinMaxValues/>
        </div>
        <div className="w-1/3 bg-white px-5 py-5">
          
        </div>
        <div className="w-1/3 bg-white px-5 py-5">
        </div>
      </div>

      <div className="p-10 shadow-md bg-white">
        <InventoryList/>
      </div>
    </div>
  );
};

export default Home;