import React, { useState, useEffect } from "react";
import DeleteButton from "./DeleteButton";
import AddButton from "./AddButton";
import { Link } from "react-router-dom";

const SavedList = ({ active, onClick }) => {
  const airtableKey = import.meta.env.VITE_SERVER_AIRTABLE_KEY;
  const [savedListData, setSavedListData] = useState([]);

  const getSaveDataToList = async () => {
    const res = await fetch(
      "https://api.airtable.com/v0/app4Z22yM5bIHZkkz/Table%202?MaxRecords=50",
      {
        headers: {
          Authorization: `Bearer ${airtableKey}`,
          "Content-Type": "application/json",
        },
      }
    );
    try {
      if (res.ok) {
        const data = await res.json();
        setSavedListData(data.records);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getSaveDataToList();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xl p-6 bg-white shadow-md rounded-md">
        <div className="mb-4">
          <button
            onClick={onClick}
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            {active ? "Show Saved List" : "Show Saved List"}
          </button>
        </div>

        <div className="mb-4">
          <div className="mt-2">
            {active &&
              savedListData.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-4 border-b border-gray-200"
                >
                  <Link
                    to={`/recipe/${item.fields.food_id}`}
                    className="text-sm font-semibold text-blue-500 hover:text-blue-700"
                  >
                    {item.fields.title}
                  </Link>

                  <div className="flex space-x-4">
                    <AddButton
                      recipeId={item.fields.food_id}
                      recipeTitle={item.fields.title}
                      recordId={item.fields.record_id}
                      getSaveDataToList={getSaveDataToList}
                      className="mr-2"
                    />
                    <DeleteButton
                      getSaveDataToList={getSaveDataToList}
                      record_id={item.fields.record_id}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedList;
