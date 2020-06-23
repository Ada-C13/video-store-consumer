import React from "react";
import PropTypes from "prop-types";
import "./Home.css";

// Home Component
const Home = (props) => {
  console.log(`drawing Home...`, props.id);
  return <h1>Home</h1>;
};

Home.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Home;
