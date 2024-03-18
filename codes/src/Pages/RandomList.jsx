import React, { useEffect, useState } from "react";
import jsonData from "../Components/data.json";
import RandomItem from "../Components/RandomItem";

const RandomList = () => {
  const [allRandomRecipeData, setAllRandomRecipeData] = useState();
  const spoonacularKey = import.meta.env.VITE_SERVER_SPOONACULAR_KEY;
  const getRandomRecipeData = async () => {
    try {
      const res = await fetch(
        "https://api.spoonacular.com/recipes/random?number=10",
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
        Still don't know what to cook? Don't worry, there are more suggestions
        for you!
      </h3>
      <h6 className="text-s text-center text-gray-600 mb-8">
        ( just click the button below )
      </h6>
      <div className="flex flex-col items-center justify-center gap-4 p-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={getRandomRecipeData}
        >
          Get Random Recipe
        </button>
        <RandomItem allRandomRecipeData={allRandomRecipeData} />
      </div>
    </div>
  );
};
export default RandomList;
