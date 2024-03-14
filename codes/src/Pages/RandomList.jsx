import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jsonData from "../Components/data.json";
// import SaveButton from "../Components/SaveButton";

const RandomList = () => {
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
      <div className="row">
        <button className="col-md-3" onClick={getRandomRecipeData}>
          Get Random Recipe
        </button>
      </div>

      <div>
        {allRandomRecipeData.recipes?.map((recipe, index) => (
          <div key={index}>
            {recipe.image && <img src={recipe.image} alt={recipe.title} />}
            <p>{recipe.id}</p>
            <p>{recipe.title}</p>
          </div>
        ))}
      </div>

      {/* <SaveButton></SaveButton> */}
    </div>
  );
};
export default RandomList;
