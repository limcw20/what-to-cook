import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MainRecipe = () => {
  const [random, setRandom] = useState(null);

  const getRandomRecipe = async () => {
    try {
      const res = await fetch("https://api.spoonacular.com/recipes/random", {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "ca166215ff724312b0e1f673d7501f25",
        },
      });

      if (res.ok) {
        const data = await res.json();
        setRandom(data);
      } else {
        throw new Error("Failed to fetch recipe");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  // useEffect(() => {
  //   getRandomRecipe();
  // }, []);

  return (
    <div>
      <div className="row">
        <button className="col-md-3" onClick={getRandomRecipe}>
          Get Random Recipe
        </button>
      </div>
      {random && (
        <div>
          <p>{JSON.stringify(random)}</p>
        </div>
      )}
    </div>
  );
};

export default MainRecipe;
