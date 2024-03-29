import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MainRecipe from "./Pages/MainRecipe";

import MainList from "./Pages/MainList";
import Random from "./Pages/RandomList";
import RandomList from "./Pages/Random";
import SavedList from "./Components/SavedList";

import NotFound from "./Pages/NotFound";
import NavBar from "./Components/NavBar";
import RecipeDetails from "./Pages/RecipeDetails";
import RandomItem from "./Components/RandomItem";

function App() {
  return (
    <>
      <NavBar></NavBar>

      <Routes>
        <Route path="/" element={<Navigate replace to="/main" />} />
        <Route path="main" element={<MainRecipe />} />
        <Route path="random" element={<Random />} />
        <Route path="randomlist" element={<RandomList />} />
        <Route path="mainlist" element={<MainList />} />
        <Route path="savedlist" element={<SavedList />} />
        <Route path="randomitem" element={<RandomItem />} />
        <Route path="recipe/:id" element={<RecipeDetails />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
