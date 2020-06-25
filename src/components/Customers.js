import React from "react";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

import "./Customers.css";

const drawCustomers = (customerList, onCustomerSelectCallback) => {
  return customerList.map((customer, index) => {
    return (
      <tr key={index}>
        <td>{customer.name}</td>
        <td>{customer.phone}</td>
        <td>{customer.account_credit}</td>
        <td>{customer.movies_checked_out_count}</td>
        <td>
          <Button variant="primary" onClick={() => onCustomerSelectCallback(customer.id)}>
            Select Customer
          </Button>
        </td>
      </tr>
    );
  });
};

// Customers Component
const Customers = (props) => {
  console.log(`drawing customers...`, props);
  return (
    <div>
      <h1>Customers</h1>
      <div className="customerlistlist">
        <Table hover>
          <thead>
            <tr>
              <td>Name</td>
              <td>Phone</td>
              <td>Account Credit</td>
              <td>Account Credit</td>
              <td>Movies Checked Out</td>
            </tr>
          </thead>
          <tbody>
            {drawCustomers(props.customerList, props.onCustomerSelectCallback)}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

Customers.propTypes = {
  onCustomerSelectCallback: PropTypes.func.isRequired,
  customerList: PropTypes.array.isRequired,
};

export default Customers;
