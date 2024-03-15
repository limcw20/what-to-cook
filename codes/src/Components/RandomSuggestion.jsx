import React from "react";
import SaveButton from "./SaveButton";
import styles from "./RandomSuggestion.module.css";

const RandomSuggestion = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className={styles.position}>
          {props.allRandomRecipeData.recipes?.map((recipe, index) => (
            <div className={`col-md-3 ${styles.card}`}>
              <div key={index}>
                <div>
                  {recipe.image && (
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="img-fluid"
                    />
                  )}
                  <p>{recipe.id}</p>
                  <p>{recipe.title}</p>
                  <SaveButton
                    recipeId={recipe.id}
                    recipeTitle={recipe.title}
                  ></SaveButton>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div style={{ width: "18rem" }}>
        <img variant="top" src="holder.js/100px180" />
        <div className="Body">
          <div className="Title">Card Title </div>
          <div classname="text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </div>
          <button variant="primary">Go somewhere</button>
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default RandomSuggestion;
