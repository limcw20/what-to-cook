import React, { useState } from "react";

const ParentList = () => {
  const [savedListActive, setSavedListActive] = useState(true);
  const [shoppingListActive, setShoppingListActive] = useState(false);

  const handleSavedListClick = () => {
    setSavedListActive(true);
    setShoppingListActive(false);
  };

  const handleShoppingListClick = () => {
    setSavedListActive(false);
    setShoppingListActive(true);
  };

  return (
    <div>
      <Child active={savedListActive} onClick={handleSavedListClick} />
      <Child active={shoppingListActive} onClick={handleShoppingListClick} />
    </div>
  );
};

export default ParentList;
