import React from "react";
import PropTypes from "prop-types";
import "./Customers.css";

// Customers Component
const Customers = (props) => {
  console.log(`drawing customers...`, props);
  props.onCustomerSelectCallback(3);
  return <h1>Customers</h1>;
};

Customers.propTypes = {
  onCustomerSelectCallback: PropTypes.func.isRequired,
};

export default Customers;
