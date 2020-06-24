  
import React from 'react';
import PropTypes from 'prop-types';
import './Customer.css';
import { Button } from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';

const Customer = ({ id, name, address, city, state, registered_at, phone, account_credit, movies_checked_out_count, selectCustomer }) => {
  return (
    <section className="card customer-card mb-3">
      <h5 className="card-header">
      {name}</h5>
      <div className="card-body">
            <p className="card-text">Date Registered: {(registered_at).substring(0,10)} </p>
             <p className="card-text">Account Credit: {account_credit} </p>
            <p className="card-text">Movies Checked Out: {movies_checked_out_count} </p>
   
            <p className="card-text">Phone: {phone} </p>
            <p className="card-text">Address: {address}{city}, {state} </p>

          <Button
            className="btn btn-dark"
            onClick={() => selectCustomer(id)}>
              Select Customer
          </Button>

   </div>

   </section>

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