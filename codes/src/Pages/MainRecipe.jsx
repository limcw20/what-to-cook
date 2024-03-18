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
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${spoonacularKey}&query=${query}&number=100`,
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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">What to Cook?</h1>
      <h3 className="text-xl text-center text-gray-600 mb-8">
        Have a slight idea on what to cook? Search it up below!
      </h3>

      <div className="flex justify-center items-center gap-4">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          className="border-2 border-gray-300 rounded-md p-2 w-full max-w-md"
          placeholder="Search for recipes..."
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border-none"
        >
          Search
        </button>
      </div>
      {loading && <p className="text-center mt-4">Loading...</p>}
      <MainRecipeList results={results} className="mt-8" />
    </div>
  );
};

export default MainRecipe;
