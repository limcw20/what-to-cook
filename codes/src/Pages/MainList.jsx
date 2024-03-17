import React, { useState } from "react";

import SavedList from "../Components/SavedList";
import ShoppingList from "../Components/ShoppingList";

const MainList = () => {
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
      <div>
        <SavedList
          active={savedListActive}
          onClick={handleSavedListClick}
        ></SavedList>
        <ShoppingList
          active={shoppingListActive}
          onClick={handleShoppingListClick}
        ></ShoppingList>
      </div>
    </div>
  );
};

export default MainList;
