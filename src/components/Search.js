import React from "react";
import PropTypes from "prop-types";
import "./Search.css";

// Search Component
const Search = (props) => {
  console.log(`drawing Search...`, props.id);
  return <h1>Search</h1>;
};

Search.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Search;
