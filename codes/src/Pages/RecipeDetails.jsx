import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SaveButton from "../Components/SaveButton";

function RecipeDetails() {
  const { id } = useParams();
  const spoonacularKey = import.meta.env.VITE_SERVER_SPOONACULAR_KEY;
  const [selectedRecipeData, setSelectedRecipeData] = useState();

  const getSelectedRecipeData = async () => {
    try {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information`,
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": `${spoonacularKey}`,
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        setSelectedRecipeData(data);
      } else {
        throw new Error("Failed to fetch recipe");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getSelectedRecipeData();
  }, [id]);

  if (!selectedRecipeData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{selectedRecipeData.title}</h1>
      <img src={selectedRecipeData.image} alt={selectedRecipeData.title} />
      <div>
        <h3>ingredients</h3>
        {selectedRecipeData.extendedIngredients &&
          selectedRecipeData.extendedIngredients.map((ingredient, index) => (
            <div key={index}>
              <p>
                {ingredient.amount} {""}
                {ingredient.unit} of {""}
                {ingredient.name}
              </p>
            </div>
          ))}
      </div>
      <div>
        <h3>Instructions</h3>
        <p>{selectedRecipeData.instructions}</p>
        {selectedRecipeData.analyzedInstructions &&
          selectedRecipeData.analyzedInstructions.map((instruction, index) => (
            <div key={index}>
              <h3>Steps</h3>
              {instruction.steps.map((step, stepIndex) => (
                <div key={stepIndex}>
                  <p>
                    Step {step.number}: {step.step}
                  </p>
                </div>
              ))}
            </div>
          ))}
      </div>
      <SaveButton
        recipeId={selectedRecipeData.id}
        recipeTitle={selectedRecipeData.title}
      ></SaveButton>
    </div>
  );
}
export default RecipeDetails;
