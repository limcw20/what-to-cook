import React, { useState, useEffect } from "react";
import DeleteButton from "../Components/DeleteButton";

const SavedList = () => {
  const airtableKey = import.meta.env.VITE_SERVER_AIRTABLE_KEY;
  const [savedListData, setSavedListData] = useState([]);
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
  return (
    <div>
      <br />
      <br />
      <h1>Saved List</h1>
      <br />
      <div>
        {savedListData.map((item, index) => {
          return (
            <div className="row">
              <div className="col-md-4" key={index}>
                {item.fields.food_id}
              </div>
              <div className="col-md-4" key={index}>
                {item.fields.title}
              </div>
              <DeleteButton
                getSaveDataToList={getSaveDataToList}
                record_id={item.fields.record_id}
              ></DeleteButton>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SavedList;
