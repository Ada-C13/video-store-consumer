import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import "./Customer.css";

const Customers = ({ API_URL_BASE, onSelectedCustomerCallback }) => {
  const [customerList, setCustomerList] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get(API_URL_BASE + "/customers").then((response) => {
      // Load in the data
      setCustomerList(response.data);
      // }).catch((error) => {
      // Show an error
      // setError("There was an error with this request!");
    });
  }, [API_URL_BASE]);

  const selectCustomer = (customer) => {
    setSelectedCustomer(customer);
    localStorage.setItem("selectedCustomer", customer);
    onSelectedCustomerCallback(customer);
  };

  return (
    <div className="customer-container">
      {customerList.map((customer, i) => (
        <Card className="customer-card" key={i}>
          <Card.Body>
            <Card.Text>{customer.name}</Card.Text>
            <Card.Text>{customer.phone}</Card.Text>
            <Button
              className="cutomer-button"
              onClick={() => selectCustomer(customer)}
              variant="primary"
            >
              Select
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
Customers.propTypes = {
  API_URL_BASE: PropTypes.string.isRequired,
  onSelectedCustomerCallback: PropTypes.func.isRequired,
};

export default Customers;
