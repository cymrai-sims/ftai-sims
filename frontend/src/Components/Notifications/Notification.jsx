import React from 'react';

const Notification = ({ title, value, change, icon }) => {
  const isNegative  = change.trim().startsWith('-');

  return (
    <div className='flex flex-col bg-white rounded-lg shadow-md p-1 w-full'>
      <div className="flex flex-row items-center p-2 mb-4">
        <div className="flex flex-col flex-1 justify-center space-between border-l-5 border-[var(--blue-main)] pl-4">
          <h5 className='text-gray-500 text-sm'>
            {title}
          </h5>
          <h3 className='font-bold text-xl'>
            {value}
          </h3>
        </div>
        <div className="icon bg-gray-100 rounded-full p-2 mr-3 items-center justify-center shadow-md">
          {icon}
        </div>
      </div>
      <h6 className='text-gray-500 text-sm px-4 pb-3'>
        <span className={isNegative ? 'text-[var(--orange-main)]' : 'text-[var(--blue-main)]'}>
          {change}
        </span> from last month
      </h6>
    </div>
  );
};

export default Notification;