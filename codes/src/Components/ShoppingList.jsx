import React from "react";

const ShoppingList = ({ items, active, onClick }) => {
  return (
    <div>
      <button onClick={onClick}>
        {active ? "Show Shopping List" : "Show Shopping List"}
      </button>
      {active && <div>hi</div>}
      {active && items && items.length > 0 && (
        <div>
          <h2>Shopping List</h2>
          <ul>
            {items &&
              items.map((item, index) => (
                <div key={index}>
                  <div>{item.fields?.title}</div>

                  <div>
                    {item.fields?.unitAmount}
                    {item.fields?.unitMeasure} {item.fields?.ingredientUnit}{" "}
                    {item.fields?.ingredientName}
                  </div>
                </div>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ShoppingList;
