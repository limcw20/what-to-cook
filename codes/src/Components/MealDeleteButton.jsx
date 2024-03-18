import React from "react";

const MealDeleteButton = (props) => {
  const record_Id = props.record_id;
  const airtableKey = import.meta.env.VITE_SERVER_AIRTABLE_KEY;

  const deleteSavedData = async () => {
    const res = await fetch(
      `https://api.airtable.com/v0/app4Z22yM5bIHZkkz/Table%203/${record_Id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${airtableKey} `,
          "Content-Type": "application/json",
        },
      }
    );
  };
  return (
    <button
      onClick={deleteSavedData}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    >
      Delete
    </button>
  );
};

export default MealDeleteButton;
