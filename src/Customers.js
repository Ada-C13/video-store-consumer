import React , { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Customer from './Customer';

const Customers = (props) => {

  const API_CUSTOMERS_URL = 'http://localhost:3000/customers'
  
  const [customers, setCustomerList] = useState([])
  const [errorMessage, setErrorMessage] = useState(null);

  // get list of customer objects from API and update state
  useEffect( () => {
    axios.get(API_CUSTOMERS_URL)
      .then((response) => { 
        setCustomerList(response.data);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
    }, []);

  // turn each customer object into a customer component
  const customerComponents = customers.map((customerObj) => {
    return(< Customer 
      id={customerObj.id}
      name={customerObj.name} 
      account_credit = {customerObj.account_credit}
      movie_count={customerObj.movies_checked_out_count}
      key={customerObj.id}
      onClickCallback= {props.onClickCallback}
    />)
  })

  
  return (
    <div className="Customers">
      <h1 className="body-header">All Customers</h1>
      <section className="grid-columns">
        {customerComponents}
      </section>
    </div>
  );
}

export default Customers;