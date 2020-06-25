import React from 'react';
import PropTypes from 'prop-types';
import './Customer.css';
import { Card, Button } from 'react-bootstrap/';

const Customer = ({ id, name, address, city, state, postalCode, registered_at, phone, account_credit, movies_checked_out_count, selectCustomer }) => {
  return (
    <Card>
      <div className="col customer-card-container">
        <div className="row customer-card">
          <img src={`https://image.flaticon.com/icons/svg/3105/310593${id%10}.svg`} alt="avatar thumbnail" className="img-thumbnail w-25"/>
          <div className="customer-name">
            <h3> {name} </h3>
            <ul>
              <li>Movies Checked Out: {movies_checked_out_count} </li>
              <li>Account Credit: ${account_credit} </li>
              <li>Registration Date: {(registered_at).substring(0,10)} </li>
              <li>Phone: {phone} </li>
              <li>Address: {address}, {city}, {state} {postalCode} </li>
              <div className="customer-select-button">
              <Button
                varient="flat"
                type="button"
                className="select-customer"
                onClick={() => selectCustomer(id)}>
                  Select
              </Button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </Card>
  )
}

Customer.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  registeredAt: PropTypes.string,
  address: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  postalCode: PropTypes.string,
  phone: PropTypes.string,
  accountCredit: PropTypes.string,
  moviesCheckedOutCount: PropTypes.string,
};

export default Customer;
