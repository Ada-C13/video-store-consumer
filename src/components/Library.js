import React from "react";
import PropTypes from "prop-types";
import "./Library.css";

// Library Component
const Library = (props) => {
  console.log(`drawing Library...`, props.id);
  return <h1>Library</h1>;
};

Library.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Library;
