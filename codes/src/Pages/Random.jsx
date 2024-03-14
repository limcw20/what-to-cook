import React from "react";
import { Link } from "react-router-dom";

const Random = () => {
  return (
    <div>
      <h1>WHAT TO COOK?</h1>
      <button>
        <Link to="/random">Get Random Recipe</Link>
      </button>
    </div>
  );
};

export default Random;
