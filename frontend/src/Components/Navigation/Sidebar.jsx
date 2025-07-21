import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { IoHomeOutline } from "react-icons/io5";
import { GoChecklist } from "react-icons/go";
import { BiArchive } from "react-icons/bi";
import { GiAutoRepair } from "react-icons/gi";
import { IoReceiptOutline } from "react-icons/io5";
import { RiUserSettingsLine } from "react-icons/ri";
import { TfiHelpAlt } from "react-icons/tfi";
import { 
  ChevronDown, 
  CalendarDays, 
  LayoutDashboard, 
  PackageCheck, 
  Package, 
  Wrench, 
  ReceiptText, 
  UserRoundCog, 
  Headset 
} from "lucide-react";

// Images
import logo from "../../assets/Images/full_logo_1.png";

const menuItems = [
  {
    id: "dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
    to: "/",
    badge: null,
  },
  {
    id: "inventory",
    icon: PackageCheck,
    label: "Inventory",
    submenu: [
      {
        id: "global-inventory",
        label: "Global Inventory",
        to: "/inventory/global-inventory",
      },
      {
        id: "usage-insights",
        label: "Usage Insights",
        to: "/inventory/usage-insights",
      },
      { id: "min-max", label: "Min&Max Levels", to: "/inventory/min-max" },
      { id: "eoq", label: "Economic Order Quantity", to: "/inventory/eoq" },
      { id: "forecast", label: "Forecast", to: "/inventory/forecast" },
      { id: "work-orders", label: "Work Orders", to: "/inventory/work-orders" },
      { id: "scrap-rates", label: "Scrap Rates", to: "/inventory/scrap-rates" },
    ],
  },
  {
    id: "procurement",
    icon: Package,
    label: "EOQ & Holding Costs",
    to: "/procurement",
  },
  {
    id: "maintenance",
    icon: Wrench,
    label: "Maintenance",
    to: "/maintenance",
  },
  {
    id: "requisitions",
    icon: ReceiptText,
    label: "Requisitions",
    to: "/requisitions",
  },
  {
    id: "settings",
    icon: UserRoundCog,
    label: "Settings",
    to: "/settings",
  },
  {
    id: "support",
    icon: Headset,
    label: "Support",
    to: "/support",
  },
  {
    id: "calendar",
    icon: CalendarDays,
    label: "Calendar",
    to: "/calendar",
  },
];

const Sidebar = ({ collapsed = false }) => {
  const [expanded, setExpanded] = useState(new Set());

  const toggleExpand = (id) => {
    setExpanded((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  };

  return (
    <div
      className={`h-screen bg-[var(--dark-main)] text-white flex flex-col sidebar-shadow z-50 transition-all duration-300 overflow-hidden ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Logo */}
      <div
        className={`flex flex-row items-center justify-center border-b-2 border-white/20 px-5 py-4 transition-all duration-300 ${
          collapsed ? "justify-center" : ""
        }`}
      >
        <img
          src={logo}
          alt="FTAI Logo"
          className={`transition-all duration-300 ${
            collapsed ? "h-10 w-10" : "h-14 w-auto"
          }`}
        />
      </div>

      {/* Menu */}
      <nav className="menu-bar flex-1 flex flex-col justify-between">
        <ul className="flex flex-col gap-2 mt-10 pt-10">
          {/* Store Menu heading: only when expanded */}
          {!collapsed && (
            <li className="font-light uppercase text-cl text-gray-400 heading pl-10">
              Store Menu
            </li>
          )}
          {menuItems.map((item) => (
            <li key={item.id} className="relative">
              {item.submenu ? (
                <>
                  <div
                    className={`cursor-pointer flex items-center px-5 py-2 gap-4 hover:bg-[var(--dark-main-mid)] transition duration-300 select-none ${
                      expanded.has(item.id)
                        ? "bg-[var(--dark-main-mid)] text-[var(--dark-main)]"
                        : ""
                    }`}
                    onClick={() => toggleExpand(item.id)}
                  >
                    {/* Icon always shown */}
                    <item.icon className="text-[1.6rem]" />
                    {/* Show label and chevron only when expanded */}
                    {!collapsed && (
                      <>
                        <span>{item.label}</span>
                        <ChevronDown
                          size={18}
                          className={`ml-auto transition-transform duration-200 ${
                            expanded.has(item.id) ? "rotate-180" : ""
                          }`}
                        />
                      </>
                    )}
                  </div>
                  {/* Submenu: only show if expanded and not collapsed */}
                  {!collapsed && expanded.has(item.id) && (
                    <ul className="ml-8 mt-1 flex flex-col gap-1 text-sm">
                      {item.submenu.map((sub) => (
                        <li key={sub.id}>
                          <NavLink
                            to={sub.to}
                            className={({ isActive }) =>
                              `block px-2 py-2 pl-12 rounded hover:bg-[var(--dark-main-mid)] transition-all duration-200 ${
                                isActive
                                  ? "text-[var(--dark-main)] bg-[var(--dark-main-mid)] font-semibold"
                                  : "text-white"
                              }`
                            }
                          >
                            {sub.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center px-5 py-2 gap-4 text-white transition duration-300 ${
                      isActive
                        ? "bg-[var(--dark-main-mid)] text-[var(--dark-main)]"
                        : "hover:bg-[var(--dark-main-mid)] hover:text-[var(--dark-main)]"
                    }`
                  }
                >
                  {/* Icon always shown */}
                  <item.icon className="text-[1.6rem]" />
                  {/* Show label and badge only when expanded */}
                  {!collapsed && (
                    <>
                      <span>{item.label}</span>
                      {item.badge && (
                        <span className="ml-2 px-2 py-1 text-xs bg-red-500 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <hr className="border-t border-white my-1 mx-10" />

      {/* User Profile & Logout */}
      <div className="p-6 flex flex-col gap-2">
        {!collapsed && (
          <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50/10">
            <img
              src="https://wallpapers.com/images/hd/user-avatar-template-png-lab-e410ss44o7rwyjta.png"
              alt="User Avatar"
              className="w-10 h-10 rounded-full ring-2 ring-blue-500"
            />
            <div className="pl-3">
              <p className="text-sm font-medium text-slate-200">User Name</p>
              <p className="text-xs text-slate-400">Administrator</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
