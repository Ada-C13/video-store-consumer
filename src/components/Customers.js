import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:3000/customers')
      .then((response) => {
        const allCustomers = response.data;
        setCustomers(allCustomers);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);

  return (
    <div className='Lists-container'>
      Customers List
      <ul>
        {customers.map((customer) => {
          return (
            <li>
              {customer.name}
              {customer.registered_at}
              {customer.address}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Customers;
