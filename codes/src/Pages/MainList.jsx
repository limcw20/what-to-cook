import React from "react";
import { Link } from "react-router-dom";

const MainList = () => {
  return (
    <div>
      <div>
        <Link to="/savedlist">Go to saved list</Link>
      </div>
      <div>
        <Link to="/shoppinglist">Go to shopping list</Link>
      </div>
    </div>
  );
};

export default MainList;
