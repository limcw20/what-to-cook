import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import jsonData from "../Components/data.json";
import RandomSuggestion from "../Components/RandomSuggestion";

const Random = () => {
  const [allRandomRecipeData, setAllRandomRecipeData] = useState();
  const spoonacularKey = import.meta.env.VITE_SERVER_SPOONACULAR_KEY;
  const getRandomRecipeData = async () => {
    try {
      const res = await fetch(
        "https://api.spoonacular.com/recipes/random?number=2",
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": `${spoonacularKey}`,
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        setAllRandomRecipeData(data);
      } else {
        throw new Error("Failed to fetch recipe");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getRandomRecipeData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-8">WHAT TO COOK?</h1>
      <h3 className="text-xl text-center text-gray-600 mb-8">
        Don't know what to cook? Don't worry, here are some suggestions for you!
      </h3>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={getRandomRecipeData}
      >
        <Link to="/random" className="text-white">
          Get Random Recipe
        </Link>
      </button>
      <RandomSuggestion allRandomRecipeData={allRandomRecipeData} />
    </div>
  );
};
export default Random;
