import React from "react";
import SaveButton from "./SaveButton";

const RandomItem = (props) => {
  return (
    <div>
      {props.allRandomRecipeData.recipes?.map((recipe, index) => (
        <div key={index}>
          {recipe.image && <img src={recipe.image} alt={recipe.title} />}
          <p>{recipe.id}</p>
          <p>{recipe.title}</p>
          <SaveButton recipeId={recipe.id}></SaveButton>
        </div>
      ))}
    </div>
  );
};

export default RandomItem;
