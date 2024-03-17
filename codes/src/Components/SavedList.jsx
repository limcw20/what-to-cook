import React, { useState, useEffect } from "react";
import DeleteButton from "./DeleteButton";
import AddButton from "./AddButton";
import ShoppingList from "./ShoppingList";

const SavedList = ({ active, onClick, updateShoppingList }) => {
  const airtableKey = import.meta.env.VITE_SERVER_AIRTABLE_KEY;
  const [savedListData, setSavedListData] = useState([]);
  const [selectedRecordId, setSelectedRecordId] = useState();

  const getSaveDataToList = async () => {
    const res = await fetch(
      "https://api.airtable.com/v0/app4Z22yM5bIHZkkz/Table%202?maxRecords=20&view=Grid%20view",
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

  const addSavedData = async (item) => {
    updateShoppingList(item);

    try {
      const res = await fetch(
        "https://api.airtable.com/v0/app4Z22yM5bIHZkkz/Table%202?maxRecords=20&view=Grid%20view",
        {
          headers: {
            Authorization: `Bearer ${airtableKey}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        console.log(data.records);

        updateShoppingList(data.records);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

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
                  recordId={item.fields.record_id}
                  item={item}
                  addSavedData={addSavedData}
                />
                <DeleteButton
                  getSaveDataToList={getSaveDataToList}
                  record_id={item.fields.record_id}
                />
              </div>
            );
          })}
      </div>
      {active && selectedRecordId && (
        <ShoppingList
          recordId={selectedRecordId}
          addSavedData={addSavedData}
          recipeItem={item}
        />
      )}
    </div>
  );
};

export default SavedList;
