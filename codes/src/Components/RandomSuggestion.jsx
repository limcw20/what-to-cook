import React from "react";
import SaveButton from "./SaveButton";
import styles from "./RandomSuggestion.module.css";
import { Link } from "react-router-dom";

const RandomSuggestion = (props) => {
  // Check if allRandomRecipeData exists and has recipes array
  if (!props.allRandomRecipeData || !props.allRandomRecipeData.recipes) {
    return <div>Loading...</div>; // or you can render some other loading indicator
  }

  return (
    <div className="container">
      <div className="row">
        <div className={styles.position}>
          {props.allRandomRecipeData.recipes.map((recipe, index) => (
            <div className={`col-md-3 ${styles.card}`} key={index}>
              <div>
                {recipe.image && (
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="img-fluid"
                  />
                )}
                <p>{recipe.id}</p>
                <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
                <SaveButton
                  recipeId={recipe.id}
                  recipeTitle={recipe.title}
                  unitAmount={
                    recipe.extendedIngredients[0].measures.metric.amount
                  }
                  unitMeasure={
                    recipe.extendedIngredients[0].measures.metric.unitShort
                  }
                  ingredientName={recipe.extendedIngredients[0].name}
                  ingredientUnit={recipe.extendedIngredients[0].unit}
                ></SaveButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RandomSuggestion;
