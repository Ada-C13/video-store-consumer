import React from "react";
import PropTypes from "prop-types";
import "./Library.css";

// Library Component
const Library = (props) => {
  console.log(`drawing Library...`, props);
  props.onMovieSelectCallback(2);
  return <h1>Library</h1>;
};

Library.propTypes = {
  onMovieSelectCallback: PropTypes.func.isRequired,
};

export default Library;
