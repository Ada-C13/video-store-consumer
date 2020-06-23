import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Customer from './Customer';

const API_URL_BASE = "http://localhost:3000/";
const API_CUSTOMER_URL = "http://localhost:3000/customers"

const Customers = () => {

  const [customersList, setCustomersList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);


  useEffect(() => {
    axios.get(API_CUSTOMER_URL)
      .then( (response) => {
        const customers = response.data;
        setCustomersList(customers);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(errorMessage);
      });
  }, [API_CUSTOMER_URL])


  const customersComponents = customersList.map((customerObject) => {
    return(
      <Customer 
        key={customerObject.id}
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
      />
    )
  })


  return (
      <div>
        <h2 className="text-center">Customers</h2>
        <div className="container">
          {customersComponents}
        </div>
      </div>
  );
}

export default Customers;


// From our Rails API...pagination:
// data = data.paginate(page: params[:p], per_page: params[:n])