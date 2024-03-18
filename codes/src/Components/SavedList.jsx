import React, { useState, useEffect } from "react";
import DeleteButton from "./DeleteButton";
import AddButton from "./AddButton";
import MealPlanner from "./MealPlanner";

const SavedList = ({ active, onClick }) => {
  const airtableKey = import.meta.env.VITE_SERVER_AIRTABLE_KEY;
  const [savedListData, setSavedListData] = useState([]);

  const getSaveDataToList = async () => {
    const res = await fetch(
      "https://api.airtable.com/v0/app4Z22yM5bIHZkkz/Table%202?MaxRecords=50",
      {
        headers: {
          Authorization: `Bearer ${airtableKey}  `,
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

  //

  // const updateMealPlanner = async (item) => {
  //   updateMealPlanner(item);
  //   console.log("Adding item to meal planner:", item);
  // };

  return (
    <div>
      <br />
      <br />
      <br />
      <div>
        <button onClick={onClick}>
          {active ? "Show Saved List" : "Show Saved List"}
        </button>
        {active && <h1>Saved List</h1>}
        {active &&
          savedListData.map((item, index) => {
            return (
              <div className="row" key={index}>
                <div className="col-md-4">{item.fields.food_id}</div>
                <div className="col-md-4">{item.fields.title}</div>

                <AddButton
                  recipeId={item.fields.food_id}
                  recipeTitle={item.fields.title}
                  recordId={item.fields.record_id}
                  getSaveDataToList={getSaveDataToList}
                />
                <DeleteButton
                  getSaveDataToList={getSaveDataToList}
                  record_id={item.fields.record_id}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SavedList;
