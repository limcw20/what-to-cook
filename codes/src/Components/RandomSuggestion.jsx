import React from "react";
import SaveButton from "./SaveButton";
import { Link } from "react-router-dom";

const RandomSuggestion = (props) => {
  if (!props.allRandomRecipeData || !props.allRandomRecipeData.recipes) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {props.allRandomRecipeData.recipes.map((recipe, index) => (
          <div key={index} className="bg-white shadow-md rounded-md p-6">
            {recipe.image && (
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-64 object-cover rounded-md mb-4"
              />
            )}

            <Link
              to={`/recipe/${recipe.id}`}
              className="text-xl font-bold text-blue-500 hover:text-blue-700"
            >
              {recipe.title}
            </Link>
            <SaveButton
              recipeId={recipe.id}
              recipeTitle={recipe.title}
              unitAmount={recipe.extendedIngredients[0].measures.metric.amount}
              unitMeasure={
                recipe.extendedIngredients[0].measures.metric.unitShort
              }
              ingredientName={recipe.extendedIngredients[0].name}
              ingredientUnit={recipe.extendedIngredients[0].unit}
              className="mt-4"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RandomSuggestion;
