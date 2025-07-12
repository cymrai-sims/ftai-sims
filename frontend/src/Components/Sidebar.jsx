import React from 'react';
import { NavLink } from 'react-router-dom';

// Images
import logo from '../Images/full_logo_1.png';

// Icons#
import { IoHomeOutline } from "react-icons/io5";
import { GoChecklist } from "react-icons/go";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiAutoRepair } from "react-icons/gi";
import { TfiHelpAlt } from "react-icons/tfi";
import { IoReceiptOutline } from "react-icons/io5";
import { RiUserSettingsLine } from "react-icons/ri";
import { BiArchive } from "react-icons/bi";

import { IoIosLogOut } from "react-icons/io";

const Sidebar = () => {
  return ( 
    <div className='sidebar fixed top-0 left-0 h-screen w-86 bg-[var(--dark-main)] text-white flex flex-col sidebar-shadow z-50'>
      <div className="logo-bar flex flex-col h-30 border-b-2 border-white/20 px-5 items-center justify-center">
       <div className="flex flex-row items-center">
         <img src={logo} alt="FTAI Logo" className="h-20" />
          {/* <h4 className="text-2xl"><span className='font-bold pr-2'>FTAI</span> AVIATION</h4> */}
       </div>
        {/* <p>Smart Inventory Management</p> */}
      </div>
      <div className="menu-bar flex-1 flex flex-col justify-between">
        <ul className='flex flex-col gap-2 mt-10 pt-10'>
          <li className='font-light uppercase text-xs text-gray-400 heading pl-10'>Store Menu</li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center px-10 py-5 gap-4 text-white transition duration-300 ${
                  isActive
                    ? 'bg-[var(--dark-main-mid)] gap-6 text-[var(--dark-main)]'
                    : 'hover:bg-[var(--dark-main-mid)] hover:gap-6 hover:text-[var(--dark-main)]'
                }`
              }
            >
              <IoHomeOutline className="text-[2rem]" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/inventory"
              className={({ isActive }) =>
                `flex items-center px-10 py-5 gap-4 text-white transition duration-300 ${
                  isActive
                    ? 'bg-[var(--dark-main-mid)] gap-6 text-[var(--dark-main)]'
                    : 'hover:bg-[var(--dark-main-mid)] hover:gap-6 hover:text-[var(--dark-main)]'
                }`
              }
            >
              <GoChecklist className="text-[2rem]" />
              <span>Inventory</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/procurement"
              className={({ isActive }) =>
                `flex items-center px-10 py-5 gap-4 text-white transition duration-300 ${
                  isActive
                    ? 'bg-[var(--dark-main-mid)] gap-6 text-[var(--dark-main)]'
                    : 'hover:bg-[var(--dark-main-mid)] hover:gap-6 hover:text-[var(--dark-main)]'
                }`
              }
            >
              <BiArchive className="text-[2rem]" />
              <span>Procurement</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/maintenance"
              className={({ isActive }) =>
                `flex items-center px-10 py-5 gap-4 text-white transition duration-300 ${
                  isActive
                    ? 'bg-[var(--dark-main-mid)] gap-6 text-[var(--dark-main)]'
                    : 'hover:bg-[var(--dark-main-mid)] hover:gap-6 hover:text-[var(--dark-main)]'
                }`
              }
            >
              <GiAutoRepair className="text-[2rem]" />
              <span>Maintenance</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/requisitions"
              className={({ isActive }) =>
                `flex items-center px-10 py-5 gap-4 text-white transition duration-300 ${
                  isActive
                    ? 'bg-[var(--dark-main-mid)] gap-6 text-[var(--dark-main)]'
                    : 'hover:bg-[var(--dark-main-mid)] hover:gap-6 hover:text-[var(--dark-main)]'
                }`
              }
            >
              <IoReceiptOutline className="text-[2rem]" />
              <span>Requisitions</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `flex items-center px-10 py-5 gap-4 text-white transition duration-300 ${
                  isActive
                    ? 'bg-[var(--dark-main-mid)] gap-6 text-[var(--dark-main)]'
                    : 'hover:bg-[var(--dark-main-mid)] hover:gap-6 hover:text-[var(--dark-main)]'
                }`
              }
            >
              <RiUserSettingsLine className="text-[2rem]" />
              <span>Settings</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/support"
              className={({ isActive }) =>
                `flex items-center px-10 py-5 gap-4 text-white transition duration-300 ${
                  isActive
                    ? 'bg-[var(--dark-main-mid)] gap-6 text-[var(--dark-main)]'
                    : 'hover:bg-[var(--dark-main-mid)] hover:gap-6 hover:text-[var(--dark-main)]'
                }`
              }
            >
              <TfiHelpAlt className="text-[2rem]" />
              <span>Support</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <hr className="border-t border-white my-1 mx-10" />
      <ul className='flex flex-col gap-2 p-10 mb-5'>
        <li className='hover:text-gray-300 hover:bg-[var(--dark-main-mid)] text-center items-center'>
          <a href="" className="flex items-center gap-5 text-white hover:text-gray-300">
            <IoIosLogOut className="text-lg text-[2rem]" />
            <span>Logout</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar;