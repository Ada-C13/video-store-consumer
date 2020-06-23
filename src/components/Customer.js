import React from 'react';
import PropTypes from 'prop-types';
import './Customer.css';
import { Button } from 'react-bootstrap/';

const Customer = ({ id, name, address, city, state, registered_at, phone, account_credit, movies_checked_out_count, selectCustomer }) => {
  return (

  <div className="">
    <div className="">
      <h3> {name} </h3>
      <ul>
        <li>Account Credit: {account_credit} </li>
        <li>Movies Checked Out: {movies_checked_out_count} </li>
        <li>Date Registered: {(registered_at).substring(0,10)} </li>
        <li>Phone: {phone} </li>
        <li>Address: {address}</li>
        <li>{city}, {state} </li>
      </ul>
    </div>
    <div className="">
      <Button
        className=""
        onClick={() => selectCustomer(id)}>
          Select Customer
      </Button> 
    </div>  
  </div>
  )
};
export default Customer;