import React, { useState } from "react";
import SavedList from "../Components/SavedList";

import MealPlanner from "../Components/MealPlanner";

const MainList = () => {
  const [savedListActive, setSavedListActive] = useState(true);
  const [mealListActive, setMealListActive] = useState(false);
  // const [mealListItems, setMealListItems] = useState([]);

  const updateMealPlanner = (newItem) => {
    setMealListItems((prevItems) => [...prevItems, newItem]);
  };

  const handleSavedListClick = () => {
    setSavedListActive(true);
    setMealListActive(false);
  };

  const handleMealListClick = () => {
    setSavedListActive(false);
    setMealListActive(true);
  };

  return (
    <div>
      <div>
        <SavedList
          active={savedListActive}
          onClick={handleSavedListClick}
          updateMealPlanner={updateMealPlanner}
        />
        <MealPlanner
          active={mealListActive}
          onClick={handleMealListClick}
          // items={mealListItems}
        />
      </div>
    </div>
  );
};

export default MainList;
