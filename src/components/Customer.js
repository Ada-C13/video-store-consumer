  
import React from 'react';
import PropTypes from 'prop-types';
import './Customer.css';
import { Button } from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';

const Customer = ({ id, name, address, city, state, registered_at, phone, account_credit, movies_checked_out_count, selectCustomer }) => {
  return (
    <div className="customer-card">
    <section className="customer-header">
  
            <p><strong>{name}</strong></p>
            <p>Date Registered: {(registered_at).substring(0,10)} </p>
             <p>Account Credit: {account_credit} </p>
            <p>Movies Checked Out: {movies_checked_out_count} </p>
   
            <p>Phone: {phone} </p>
            <p>Address: {address}</p>
            <p>{city}, {state} </p>

          <Button
            className="btn btn-dark"
            onClick={() => selectCustomer(id)}>
              Select Customer
          </Button>
   
</section>
   </div>

  )
}

Customer.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  registeredAt: PropTypes.string,
  address: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  phone: PropTypes.string,
  accountCredit: PropTypes.string,
  moviesCheckedOutCount: PropTypes.string,
};

export default Customer;