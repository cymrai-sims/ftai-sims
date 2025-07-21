import React from 'react';

// Components
import InventoryList from '../Components/Inventory/InventoryList';

const Inventory = () => {
  return (
    <div className="flex flex-col p-2 gap-5">
      <InventoryList/>         
    </div>
  );
};

export default Inventory;