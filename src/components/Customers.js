import React from "react";
import PropTypes from "prop-types";
import "./Customers.css";

// Customers Component
const Customers = (props) => {
  console.log(`drawing customers...`, props.id);
  return <h1>Customers</h1>;
};

Customers.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Customers;
