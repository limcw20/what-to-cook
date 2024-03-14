import React, { useState } from "react";

const SaveButton = (props) => {
  const [savedRecipeData, setSavedRecipeData] = useState();
  const getSaveDataToList = async () => {
    const res = await fetch(
      "https://api.airtable.com/v0/app4Z22yM5bIHZkkz/Table%202?maxRecords=20&view=Grid%20view"
    );

    if (res.ok) {
      const data = await res.json();
      setSavedRecipeData(data);
    }
    return (
      <div className="row">
        <button className="col-md-4">Save</button>
      </div>
    );
  };
};

export default SaveButton;
