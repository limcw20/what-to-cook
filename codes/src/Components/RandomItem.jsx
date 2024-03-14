import React from "react";

const RandomItem = (props) => {
  return (
    <div>
      {props.allRandomRecipeData.recipes?.map((recipe, index) => (
        <div key={index}>
          {recipe.image && <img src={recipe.image} alt={recipe.title} />}
          <p>{recipe.id}</p>
          <p>{recipe.title}</p>
        </div>
      ))}
    </div>
  );
};

export default RandomItem;
