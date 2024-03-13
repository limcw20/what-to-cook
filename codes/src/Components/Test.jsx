import React, { useState, useEffect } from "react";

const Test = () => {
  const [random, setRandom] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const getRandomRecipe = async () => {
    try {
      const res = await fetch("https://api.spoonacular.com/recipes/random", {
        headers: {
          "Content-Type": "application/json",
          apiKey: "ca166215ff724312b0e1f673d7501f25",
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

  useEffect(() => {
    getRandomRecipe();
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
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
          <h2>{random.title}</h2>
          <p>{random.summary}</p>
        </div>
      )}
    </div>
  );
};

export default Test;
