import React, { useState, useEffect } from "react";

const SavedList = () => {
  const [savedListData, setSavedListData] = useState([]);
  const getSaveDataToList = async () => {
    const res = await fetch(
      "https://api.airtable.com/v0/app4Z22yM5bIHZkkz/Table%202?maxRecords=20&view=Grid%20view",
      {
        headers: {
          Authorization: `Bearer pattoq1SWOXWroQa3.310dfb5dfdcdfbeb4aa3d3724e653f411c5c38a0f1fcd2a3c2676f0ae78d41eb `,
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
                {item.fields.Title}
              </div>
              <button className="col-md-4">save</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SavedList;
