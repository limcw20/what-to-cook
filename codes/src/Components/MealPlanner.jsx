import React, { useEffect, useState } from "react";
import MealDeleteButton from "./MealDeleteButton";

const MealPlanner = ({ active, onClick, getSaveDataToList }) => {
  const airtableKey = import.meta.env.VITE_SERVER_AIRTABLE_KEY;
  const [mealData, setMealData] = useState([]);

  const getMealPlannerData = async () => {
    try {
      const res = await fetch(
        "https://api.airtable.com/v0/app4Z22yM5bIHZkkz/Table%203?maxRecords=7",
        {
          headers: {
            Authorization: `Bearer ${airtableKey}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        setMealData(data.records);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getMealPlannerData();
  }, [getMealPlannerData]);

  return (
    <div>
      <button onClick={onClick}>
        {active ? "Show Meal Planner" : "Show Meal Planner"}
      </button>
      {active && <div>hi</div>}
      {active && mealData && mealData.length > 0 && (
        <div>
          <h2>Meal Planner</h2>
          <ul>
            {mealData &&
              mealData.map((item, index) => (
                <div key={index}>
                  <div>{item.fields?.title}</div>
                  <MealDeleteButton
                    getSaveDataToList={getSaveDataToList}
                    record_id={item.fields.record_id}
                  ></MealDeleteButton>
                </div>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MealPlanner;
