import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jsonData from "../Components/data.json";

const Random = () => {
  const [allRandomRecipeData, setAllRandomRecipeData] = useState(jsonData);
  const [filteredRandomRecipeData, setFilteredRandomRecipeData] =
    useState(false);

  const handleClick = () => {
    setFilteredRandomRecipeData(true);
    // getRandomRecipeData();
  };

  const getRandomRecipeData = async () => {
    // try {
    //   const res = await fetch("https://api.spoonacular.com/recipes/random", {
    //     headers: {
    //       "Content-Type": "application/json",
    //       "x-api-key": "ca166215ff724312b0e1f673d7501f25",
    //     },
    //   });
    if (res.ok) {
      const data = await res.json();
      setAllRandomRecipeData(data);
    } else {
      throw new Error("Failed to fetch recipe");
    }
    // } catch (error) {
    //   console.error(error.message);
    // }
  };

  // useEffect(() => {
  //   getRandomRecipeData();
  // }, []);

  return (
    <div>
      <div className="row">
        <button className="col-md-3" onClick={handleClick}>
          Get Random Recipe
        </button>
      </div>
      {filteredRandomRecipeData && (
        <div>
          {/* <p>{JSON.stringify(allRandomRecipeData.recipes[0])}</p> */}
          {allRandomRecipeData.recipes[0]?.image && (
            <img src={allRandomRecipeData.recipes[0].image} />
          )}

          <p>{allRandomRecipeData.recipes[0].id}</p>
          <p>{allRandomRecipeData.recipes[0].title}</p>
        </div>
      )}
    </div>
  );
};

export default Random;
