import React from "react";
import { Link } from "react-router-dom";

const MainRecipeList = (props) => {
  const results = props.results;
  return (
    <div>
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            <img src={result.image} />
            <Link to={`/recipe/${result.id}`}>{result.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainRecipeList;
