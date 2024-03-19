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

  const cleanedInstructions = selectedRecipeData.instructions.replace(
    /<ol>|<\/ol>|<li>|<\/li>/g,
    ""
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 border-b-2 border-secondary">
        {selectedRecipeData.title}
      </h1>
      <img
        src={selectedRecipeData.image}
        alt={selectedRecipeData.title}
        className="w-full h-64 object-cover rounded-md mb-8"
      />
      <div className="bg-white shadow-md rounded-md p-6">
        <h3 className="text-2xl font-semibold mb-4 border-b-2 border-secondary">
          Ingredients
        </h3>
        {selectedRecipeData.extendedIngredients &&
          selectedRecipeData.extendedIngredients.map((ingredient, index) => (
            <div key={index} className="mb-2">
              <p>
                {ingredient.amount} {ingredient.unit} of {ingredient.name}
              </p>
            </div>
          ))}
      </div>
      <div className="bg-white shadow-md rounded-md p-6 mt-8">
        <h3 className="text-2xl font-semibold mb-4 border-b-2 border-danger">
          Instructions
        </h3>
        <p className="mb-4">{cleanedInstructions}</p>
        {selectedRecipeData.analyzedInstructions &&
          selectedRecipeData.analyzedInstructions.map((instruction, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-2">Steps</h3>
              {instruction.steps.map((step, stepIndex) => (
                <div key={stepIndex} className="mb-1">
                  <p>
                    Step {step.number}: {step.step}
                  </p>
                </div>
              ))}
            </div>
          ))}
      </div>
      <br />
      <br />
      <SaveButton
        recipeId={selectedRecipeData.id}
        recipeTitle={selectedRecipeData.title}
        className="mt-8"
      />
    </div>
  );
}
export default RecipeDetails;
