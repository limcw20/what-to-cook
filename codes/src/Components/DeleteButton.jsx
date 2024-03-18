import React from "react";

const DeleteButton = (props) => {
  const record_Id = props.record_id;
  const airtableKey = import.meta.env.VITE_SERVER_AIRTABLE_KEY;
  const getSaveDataToList = props.getSaveDataToList;
  const deleteSavedData = async () => {
    const res = await fetch(
      `https://api.airtable.com/v0/app4Z22yM5bIHZkkz/Table%202/${record_Id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${airtableKey} `,
          "Content-Type": "application/json",
        },
      }
    );
    if (res.ok) {
      getSaveDataToList();
    }
  };

  return (
    <button
      onClick={deleteSavedData}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"
    >
      Delete
    </button>
  );
};

export default DeleteButton;
