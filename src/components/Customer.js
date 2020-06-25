import React from 'react';
import PropTypes from 'prop-types';
import './Customer.css';
import { Card } from 'react-bootstrap/';

const Customer = ({ id, name, address, city, state, postalCode, registered_at, phone, account_credit, movies_checked_out_count, selectCustomer }) => {
  return (
    <Card className="customer-container">
      <div className="customer-card-container">
        <img src={`https://image.flaticon.com/icons/svg/3105/310593${id%10}.svg`} alt="avatar thumbnail" className="col image-customer"/>
        <div className="customer-name">
          <h4> {name} </h4>
          <ul>
            <li>Movies Checked Out: {movies_checked_out_count} </li>
            <li>Account Credit: ${account_credit} </li>
            <li>Registration Date: {(registered_at).substring(0,10)} </li>
            <li>Phone: {phone} </li>
            <li>Address: {address}, {city}, {state} {postalCode} </li>
            <div className="customer-select-button">
              <button
                varient="flat"
                type="button"
                className="select-customer"
                onClick={() => selectCustomer(id)}>
                  Select
              </button>
            </div>
          </ul>
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
