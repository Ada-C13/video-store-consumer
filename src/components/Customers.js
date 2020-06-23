import React from "react";
import PropTypes from "prop-types";
import "./Customers.css";

// Customers Component
const Customers = (props) => {
  console.log(`drawing customers...`, props);
  return (
    <div>
      <h1>Customers</h1>
      <button onClick={() => props.onCustomerSelectCallback(3)}>
        Select Customer
      </button>
    </div>
  );
};

Customers.propTypes = {
  onCustomerSelectCallback: PropTypes.func.isRequired,
};

export default Customers;
