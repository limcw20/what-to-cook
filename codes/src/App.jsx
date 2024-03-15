import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MainRecipe from "./Pages/MainRecipe";
import MainRecipeList from "./Pages/MainRecipeList";
import MainList from "./Pages/MainList";
import Random from "./Pages/RandomList";
import RandomList from "./Pages/Random";
import SavedList from "./Pages/SavedList";
import ShoppingList from "./Pages/ShoppingList";
import NotFound from "./Pages/NotFound";
import NavBar from "./Components/NavBar";

function App() {
  const [saveData, setSaveData] = useState();
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Navigate replace to="/main" />} />
        <Route path="main" element={<MainRecipe />} />
        <Route path="mainrecipelist" element={<MainRecipeList />} />
        <Route path="random" element={<Random />} />
        <Route path="randomlist" element={<RandomList />} />
        <Route path="mainlist" element={<MainList />} />
        <Route path="savedlist" element={<SavedList />} />
        <Route path="shoppinglist" element={<ShoppingList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
