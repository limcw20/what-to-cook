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
          {console.log(recipe.extendedIngredients[0].measures.metric.amount)}
          {console.log(recipe.extendedIngredients[0].measures.metric.unitShort)}
          {console.log(recipe.extendedIngredients[0].name)}
          {console.log(recipe.extendedIngredients[0].unit)}

          <SaveButton
            recipeId={recipe.id}
            recipeTitle={recipe.title}
            unitAmount={recipe.extendedIngredients[0].measures.metric.amount}
            unitMeasure={
              recipe.extendedIngredients[0].measures.metric.unitShort
            }
          ></SaveButton>
        </div>
      ))}
    </div>
  );
};

export default RandomItem;
