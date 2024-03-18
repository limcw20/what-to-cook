import React, { useEffect, useState } from "react";
import MealDeleteButton from "./MealDeleteButton";
import AddNoteButton from "./AddNoteButton";
import { Link } from "react-router-dom";

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
    <div className="flex flex-col items-center ">
      <div
        className={`cursor-pointer p-4 rounded-md bg-blue-500 text-white`}
        onClick={onClick}
      >
        {active ? "Show Meal Planner" : "Show Meal Planner"}
      </div>

      {active && mealData && mealData.length > 0 && (
        <div className="mt-4">
          <ul className="space-y-4">
            {mealData.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-4 border border-gray-300 rounded-md"
              >
                <div className="flex items-center space-x-8">
                  <Link
                    to={`/recipe/${item.fields.food_id}`}
                    className="text-sm font-semibold text-blue-500 hover:text-blue-700"
                  >
                    {item.fields.title}
                  </Link>
                  <div className="flex-grow px-4 py-2" />
                  <div className="px-4 py-2"></div>
                </div>
                <div className="flex justify-between space-x-4">
                  <AddNoteButton
                    note={item.fields.note}
                    record_id={item.fields.record_id}
                    className="bg-green-500 text-white px-4 py-2 rounded-md"
                  ></AddNoteButton>
                  <MealDeleteButton
                    getSaveDataToList={getSaveDataToList}
                    record_id={item.fields.record_id}
                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                  ></MealDeleteButton>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MealPlanner;
