import React, { useEffect, useState } from "react";

const AddButton = (props) => {
  const [addRecipeToData, setAddRecipeToData] = useState(null);
  const airtableKey = import.meta.env.VITE_SERVER_AIRTABLE_KEY;
  const getAddDataToList = async () => {
    console.log(props.recipeId);
    console.log(props.recipeTitle);
    console.log(props.recordId);
    const recipeId = parseInt(props.recipeId, 10);
    const recipeTitle = props.recipeTitle;
    const recordId = props.recordId;

    console.log(recipeId);
    console.log(recipeTitle);
    console.log(
      JSON.stringify({
        food_id: recipeId,
        title: recipeTitle,
        record_id: recordId,
      })
    );
    const res = await fetch(
      "https://api.airtable.com/v0/app4Z22yM5bIHZkkz/Table%203?maxRecords=7",
      {
        method: "POST",

        headers: {
          Authorization: `Bearer ${airtableKey} `,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            food_id: recipeId,
            title: recipeTitle,
          },
        }),
      }
    );
    if (res.ok) {
      const data = await res.json();

      getSaveDataToList(data);
    }
  };

  const getSaveDataToList = props.getSaveDataToList;
  useEffect(() => {
    getSaveDataToList();
  }, []);
  return (
    <div className="flex flex-col items-center justify-start">
      <button
        onClick={getAddDataToList}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add
      </button>
      {addRecipeToData && (
        <p className="mt-4 text-green-500">Recipe saved successfully!</p>
      )}
    </div>
  );
};

export default AddButton;
