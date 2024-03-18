import React from "react";
import { Link } from "react-router-dom";

const MainRecipeList = (props) => {
  const results = props.results;
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.map((result) => (
          <div
            key={result.id}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center justify-center"
          >
            <img
              src={result.image}
              alt={result.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <Link
                to={`/recipe/${result.id}`}
                className="text-lg font-semibold text-blue-500 hover:text-blue-700"
              >
                {result.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainRecipeList;
