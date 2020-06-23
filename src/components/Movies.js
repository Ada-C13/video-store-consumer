import React from "react";
import PropTypes from "prop-types";
import "./Movies.css";

// Movies Component
const Movies = (props) => {
  console.log(`drawing Movies...`, props.id);
  return <h1>Movies</h1>;
};

Movies.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Movies;
