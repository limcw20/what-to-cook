import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MainRecipe = () => {
  const [random, setRandom] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const getRandomRecipe = async () => {
    try {
      const res = await fetch("https://api.spoonacular.com/recipes/random", {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "ca166215ff724312b0e1f673d7501f25",
        },
      });

      if (res.ok) {
        console.log(JSON.stringify(random));
        const data = await res.json();
        setRandom(data);
        console.log(JSON.stringify(random));
      } else {
        throw new Error("Failed to fetch recipe");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getRandomRecipe();
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      <Link to="/main">Go to Main Recipe</Link>

      <div className="row">
        <input
          className="col-md-3"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter something"
        />
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
