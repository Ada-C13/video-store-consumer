import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Customer from './Customer';

const API_URL_BASE = "http://localhost:3000/";

const Customers = () => {

  const [customersList, setCustomersList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);


  useEffect(() => {
    axios.get(`${API_URL_BASE}customers`)
      .then( (response) => {
        const customers = response.data.map((customerObject) => {
            return (<Customer 
              id={customerObject.id}
              name={customerObject.name} 
              registered_at={customerObject.name}
              address={customerObject.address} 
              city={customerObject.city} 
              state={customerObject.state} 
              postal_code={customerObject.postal_code} 
              phone={customerObject.phone} 
              account_credit={customerObject.account_credit} 
              movies_checked_out_count={customerObject.movies_checked_out_count} 
              key={customerObject.id}
              />);
        });
        setCustomersList(customers);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(errorMessage);
      });
  }, [customersList]);

  return (
      <div>
        <h2 className="text-center">Customers</h2>
        {customersList}
      </div>
  );
}

export default Customers;