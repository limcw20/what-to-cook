import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jsonData from "../Components/data.json";
import RandomSuggestion from "../Components/RandomSuggestion";

const Random = () => {
  const [allRandomRecipeData, setAllRandomRecipeData] = useState(jsonData);

  const getRandomRecipeData = async () => {
    // try {
    //   const res = await fetch(
    //     "https://api.spoonacular.com/recipes/random?number=2",
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //         "x-api-key": "ca166215ff724312b0e1f673d7501f25",
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
      <h1>WHAT TO COOK?</h1>
      <button>
        <Link to="/random">Get Random Recipe</Link>
      </button>
      <RandomSuggestion
        allRandomRecipeData={allRandomRecipeData}
      ></RandomSuggestion>
    </div>
  );
};

export default Random;
