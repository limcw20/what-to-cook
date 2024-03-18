import React, { useState } from "react";
import SavedList from "../Components/SavedList";

import MealPlanner from "../Components/MealPlanner";

const MainList = () => {
  const [savedListActive, setSavedListActive] = useState(true);
  const [mealListActive, setMealListActive] = useState(false);

  const handleSavedListClick = () => {
    setSavedListActive(true);
    setMealListActive(false);
  };

  const handleMealListClick = () => {
    setSavedListActive(false);
    setMealListActive(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <br />
      <br />
      <br />

      <h1 className="text-4xl font-bold text-center mb-12">WHAT TO COOK?</h1>
      <h3 className="text-xl text-center text-gray-600 mb-8">
        Here's a list for your favourites and a list for your meal planning for
        the week!
      </h3>

      <div className="flex flex-col items-center justify-center gap-4 p-4">
        <SavedList active={savedListActive} onClick={handleSavedListClick} />
        <MealPlanner active={mealListActive} onClick={handleMealListClick} />
      </div>
    </div>
  );
};

export default MainList;
