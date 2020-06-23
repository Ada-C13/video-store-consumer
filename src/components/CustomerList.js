import React, { useState, useEffect } from 'react';
import './CustomerList.css';
import PropTypes from 'prop-types';
import axios from 'axios';


export function CustomerList() {
  const [customers, setCustomers] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
      axios.get("http://localhost:3000/customers")
      .then((response) => {
        setCustomers(
          response.data
        );
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
    }, []);


    return (

      <div className='list' >
        <ul>
          {customers.map((c) => <li key={c.id}>{c.name}</li> )}
        </ul>
      {errorMessage ? <div><h2 className="validation-errors-display">{errorMessage}</h2></div> : ''}
    </div>
  );
};

CustomerList.propTypes = {
  customers: PropTypes.array,
  selectCustomerCallback: PropTypes.func.isRequired
}

