import React, { useState } from "react";
import MainRecipeList from "../Components/MainRecipeList";

const MainRecipe = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const spoonacularKey = import.meta.env.VITE_SERVER_SPOONACULAR_KEY;

  const handleSearch = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${spoonacularKey}&query=${query}&number=50`,
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": `${spoonacularKey}`,
          },
        }
      );
      const data = await res.json();
      setResults(data.results);
    } catch (error) {
      error(error.message);
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <h1>What to Cook?</h1>
      <input type="text" value={query} onChange={handleChange} />
      <button onClick={handleSearch}>Search</button>
      {loading && <p>Loading...</p>}
      <MainRecipeList results={results}></MainRecipeList>
    </div>
  );
};

export default MainRecipe;
