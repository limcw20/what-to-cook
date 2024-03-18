import React, { useState, useEffect } from "react";

const AddNoteButton = (props) => {
  const record_Id = props.record_id;
  const airtableKey = import.meta.env.VITE_SERVER_AIRTABLE_KEY;
  const [inputNote, setInputNote] = useState("");
  const [writtenNote, setWrittenNote] = useState("");

  const handleInputChange = (event) => {
    setInputNote(event.target.value);
  };

  const handleAddToList = async () => {
    console.log(
      JSON.stringify({
        note: inputNote,
      })
    );

    const res = await fetch(
      `https://api.airtable.com/v0/app4Z22yM5bIHZkkz/Table%203/${record_Id}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${airtableKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            note: inputNote,
          },
        }),
      }
    );

    if (res.ok) {
      console.log("Note added successfully!");

      setWrittenNote(inputNote);
      setInputNote("");
    }
  };

  useEffect(() => {
    const fetchNoteData = async () => {
      try {
        const res = await fetch(
          `https://api.airtable.com/v0/app4Z22yM5bIHZkkz/Table%203/${record_Id}`,
          {
            headers: {
              Authorization: `Bearer ${airtableKey}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (res.ok) {
          const data = await res.json();

          const note = data.fields?.note;
          setWrittenNote(note);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchNoteData();
  }, [record_Id, airtableKey]);

  return (
    <div className="flex justify-between items-center space-x-4">
      {writtenNote && (
        <p className="flex text-green-500">Note: {writtenNote}</p>
      )}
      <div className="flex flex-col  space-y-4">
        <input
          placeholder="Key input here.."
          value={inputNote}
          onChange={handleInputChange}
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        />
        <button
          onClick={handleAddToList}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Note
        </button>
      </div>
    </div>
  );
};
export default AddNoteButton;
