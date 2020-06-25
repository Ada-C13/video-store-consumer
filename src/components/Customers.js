import React from "react";
import PropTypes from "prop-types";
import "./Customers.css";

const renderCustomers = (customerList, onCustomerSelectCallback) => {
  return customerList.map((customer, index) => {
    return (
      <tr key={index}>
        <td>{customer.name}</td>
        <td>{customer.phone}</td>
        <td>{customer.movies_checked_out_count}</td>
        <td>
          <button onClick={() => onCustomerSelectCallback(customer.id)}>
            Select Customer
          </button>
        </td>
      </tr>
    );
  });
};

// Customers Component
const Customers = (props) => {
  console.log(`rendering customers...`, props);
  return (
    <div>
      <h1>Customers</h1>
      <div className="customerlistlist">
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Phone</td>
              <td>Movies Checked Out</td>
              <td>Select</td>
            </tr>
          </thead>
          <tbody>
            {renderCustomers(
              props.customerList,
              props.onCustomerSelectCallback
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

Customers.propTypes = {
  onCustomerSelectCallback: PropTypes.func.isRequired,
  customerList: PropTypes.array.isRequired,
};

export default Customers;
