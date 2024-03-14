import React from "react";
import { Link } from "react-router-dom";

const RandomList = () => {
  return (
    <div>
      <h1>WHAT TO COOK?</h1>
      <button>
        <Link to="/randomlist">Get Random Recipe</Link>
      </button>
    </div>
  );
};

export default RandomList;
