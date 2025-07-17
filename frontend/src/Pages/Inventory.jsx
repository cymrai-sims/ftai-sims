import React from 'react';

// Components
import InventoryList from '../Components/Inventory/InventoryList';

const Inventory = () => {
  return (
    <div className="flex flex-col px-10 py-5 gap-5">
      <InventoryList/>
    </div>
  );
};

export default Inventory;