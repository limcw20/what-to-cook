import React from "react";
import SaveButton from "./SaveButton";
import { Link } from "react-router-dom";

const RandomItem = (props) => {
  return (
    <div>
      {props.allRandomRecipeData.recipes?.map((recipe, index) => (
        <div key={index}>
          {recipe.image && <img src={recipe.image} alt={recipe.title} />}

          <p>{recipe.id}</p>
          <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>

          <SaveButton
            recipeId={recipe.id}
            recipeTitle={recipe.title}
          ></SaveButton>
        </div>
      ))}
    </div>
  );
};

export default RandomItem;
