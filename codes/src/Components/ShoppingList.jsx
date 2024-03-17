import React from "react";

const ShoppingList = ({ active, onClick }) => {
  return (
    <div>
      <button onClick={onClick}>
        {active ? "Show Shopping List" : "Show Shopping List"}
      </button>
      {active && <div>hi</div>}
    </div>
  );
};

export default ShoppingList;
