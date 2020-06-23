import React from "react";
import PropTypes from "prop-types";
import "./Search.css";

// Search Component
const Search = (props) => {
  console.log(`drawing Search...`, props.onMovieSelectCallback);
  return (
    <div>
      <h1>Search</h1>
      <button onClick={() => props.onMovieSelectCallback(1)}>
        Select Movie
      </button>
    </div>
  );
};

Search.propTypes = {
  onMovieSelectCallback: PropTypes.func.isRequired,
};

export default Search;
