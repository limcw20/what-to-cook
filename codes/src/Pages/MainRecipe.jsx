import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MainRecipe = () => {
  return (
    <div>
      <div>
        <Link to="/randomlist">Go to Random Recipe</Link>
      </div>
      <div>
        <Link to="/savedlist">Go to saved list</Link>
      </div>
    </div>
  );
};

export default MainRecipe;
