import React, { useState } from "react";
import SavedList from "../Components/SavedList";
import ShoppingList from "../Components/ShoppingList";

const MainList = () => {
  const [savedListActive, setSavedListActive] = useState(true);
  const [shoppingListActive, setShoppingListActive] = useState(false);
  const [shoppingListItems, setShoppingListItems] = useState([]);

  const updateShoppingList = (newItem) => {
    setShoppingListItems((prevItems) => [...prevItems, newItem]);
  };

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
          updateShoppingList={updateShoppingList}
        />
        <ShoppingList
          active={shoppingListActive}
          onClick={handleShoppingListClick}
          items={shoppingListItems}
        />
      </div>
    </div>
  );
};

export default MainList;
