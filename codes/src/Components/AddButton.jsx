import React from "react";

const AddButton = ({ item, addSavedData }) => {
  const handleAddToShoppingList = () => {
    addSavedData(item);
  };

  return (
    <button className="col-md-4" onClick={handleAddToShoppingList}>
      Add to Shopping List
    </button>
  );
};

export default AddButton;
