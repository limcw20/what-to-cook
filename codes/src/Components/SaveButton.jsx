import React, { useState } from "react";

const SaveButton = (props) => {
  const [saveRecipeToData, setSaveRecipeToData] = useState(null);
  const airtableKey = import.meta.env.VITE_SERVER_AIRTABLE_KEY;
  const getSaveDataToList = async () => {
    const recipeIdAsInteger = parseInt(props.recipeId, 10);
    const recipeTitle = props.recipeTitle;

    console.log(recipeIdAsInteger);
    console.log(recipeTitle);
    console.log(
      JSON.stringify({
        food_id: recipeIdAsInteger,
        title: recipeTitle,
      })
    );
    const res = await fetch(
      "https://api.airtable.com/v0/app4Z22yM5bIHZkkz/Table%202",
      {
        method: "POST",

        headers: {
          Authorization: `Bearer ${airtableKey} `,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            food_id: recipeIdAsInteger,
            title: recipeTitle,
          },
        }),
      }
    );
    if (res.ok) {
      const data = await res.json();
      setSaveRecipeToData(data.fields);
    }
  };

  return (
    <div>
      <button className="col-md-4" onClick={getSaveDataToList}>
        Save
      </button>
      {saveRecipeToData && <p>Recipe saved successfully!</p>}
    </div>
  );
};

export default SaveButton;
