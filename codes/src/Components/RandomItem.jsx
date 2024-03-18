import React from "react";
import SaveButton from "./SaveButton";
import { Link } from "react-router-dom";

const RandomItem = (props) => {
  const recipes = props.allRandomRecipeData?.recipes ?? [];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {recipes.map((recipe, index) => (
          <div key={index} className="bg-white shadow-md rounded-md p-6">
            {recipe.image && (
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            )}
            <p className="text-gray-600 text-sm">{recipe.id}</p>
            <Link
              to={`/recipe/${recipe.id}`}
              className="text-xl font-bold text-blue-500 hover:text-blue-700"
            >
              {recipe.title}
            </Link>
            <SaveButton
              recipeId={recipe.id}
              recipeTitle={recipe.title}
              className="mt-4"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RandomItem;
