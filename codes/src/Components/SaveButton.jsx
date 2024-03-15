import React, { useState } from "react";

const SaveButton = (props) => {
  const [saveRecipeToData, setSaveRecipeToData] = useState(null);

  const getSaveDataToList = async () => {
    const recipeIdAsInteger = parseInt(props.recipeId, 10);
    console.log(recipeIdAsInteger);
    const res = await fetch(
      "https://api.airtable.com/v0/app4Z22yM5bIHZkkz/Table%202?maxRecords=20&view=Grid%20view",
      {
        method: "POST",

        headers: {
          Authorization: `Bearer pattoq1SWOXWroQa3.310dfb5dfdcdfbeb4aa3d3724e653f411c5c38a0f1fcd2a3c2676f0ae78d41eb `,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ recipeId: recipeIdAsInteger }),
      }
    );
    if (res.ok) {
      const data = await res.json();
      setSaveRecipeToData(data);
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
