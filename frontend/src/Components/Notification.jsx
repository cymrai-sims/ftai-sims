import React from 'react';

const Notification = ({ title, value, change, icon }) => {
  const isNegative  = change.trim().startsWith('-');

  return (
    <div className='flex flex-col bg-white rounded-lg shadow-md px-3 py-5 mt-[1.5rem] w-full'>
      <div className="flex flex-row items-center p-4 mb-4">
        <div className="flex flex-col flex-1 justify-center space-between pl-4 border-l-2 border-gray-900 min-h-[60px]">
          <h5 className='text-gray-500 text-sm'>
            {title}
          </h5>
          <h3 className='font-bold text-2xl'>
            {value}
          </h3>
        </div>
        <div className="icon bg-gray-100 rounded-full p-5 items-center justify-center shadow-md">
          {icon}
        </div>
      </div>
      <h6 className='text-gray-500 text-sm px-4'>
        <span className={isNegative ? 'text-[var(--orange-main)]' : 'text-[var(--blue-main)]'}>
          {change}
        </span> from last month
      </h6>
    </div>
  );
};

export default Notification;