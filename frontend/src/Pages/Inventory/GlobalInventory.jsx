import React from 'react';

// Components
import MontrealInventoryList from '../../Components/Inventory/MontrealInventoryList';
import MiamiInventoryList from '../../Components/Inventory/MiamiInventoryList';
import AARInventoryList from '../../Components/Inventory/AARInventoryList';

const GlobalInventory = () => {
  return (
    <div className="flex flex-col p-2 gap-5">       
      <MontrealInventoryList/>         
      <MiamiInventoryList/>         
      <AARInventoryList/>         
    </div>

  );
};

export default GlobalInventory;