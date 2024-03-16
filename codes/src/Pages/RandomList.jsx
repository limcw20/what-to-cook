import React, { useEffect, useState } from "react";
import jsonData from "../Components/data.json";
import RandomItem from "../Components/RandomItem";

const RandomList = () => {
  const [allRandomRecipeData, setAllRandomRecipeData] = useState(jsonData);
  const spoonacularKey = import.meta.env.VITE_SERVER_SPOONACULAR_KEY;
  const getRandomRecipeData = async () => {
    // try {
    //   const res = await fetch(
    //     "https://api.spoonacular.com/recipes/random?number=2",
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //         "x-api-key": `${spoonacularKey}`,
    //       },
    //     }
    //   );
    //   if (res.ok) {
    //     const data = await res.json();
    //     setAllRandomRecipeData(data);
    //   } else {
    //     throw new Error("Failed to fetch recipe");
    //   }
    // } catch (error) {
    //   console.error(error.message);
    // }
  };

  useEffect(() => {
    getRandomRecipeData();
  }, []);

  return (
    <div>
      <div className="row">
        <button className="col-md-3" onClick={getRandomRecipeData}>
          Get Random Recipe
        </button>
        <RandomItem allRandomRecipeData={allRandomRecipeData}></RandomItem>
      </div>
    </div>
  );
};
export default RandomList;
