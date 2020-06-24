import React, { useState, useEffect } from 'react';
import axios from "axios";





const Customers = ({ API_URL_BASE }) => {
  const [customerList, setCustomerList] = useState([]);
  useEffect(() => {
    axios.get(API_URL_BASE + "/customers").then((response) => {
      // Load in the data
      setCustomerList(response.data);
    // }).catch((error) => {
    // Show an error
    // setError("There was an error with this request!");
    });
  },
    []);
  return (
    <ol>
      {customerList.map((customer) =>
      <li> {customer.name} </li>
      )}
    </ol>
  )
};


export default Customers;