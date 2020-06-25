import React from 'react';
import PropTypes from 'prop-types';
import './Customer.css';
import { Button } from 'react-bootstrap/';
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'

const Customer = ({ id, name, address, city, state, registered_at, phone, account_credit, movies_checked_out_count, selectCustomer }) => {
  return (
    <Card className="customer-card">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Account Credit: {account_credit} 
        </Card.Text>
        <Card.Text>Movies Checked Out: {movies_checked_out_count}</Card.Text>
        <Card.Text>Date Registered: {(registered_at)}</Card.Text>
        <Card.Text>Phone: {phone}</Card.Text>
        <Card.Text>Address: {address}, {city}, {state}</Card.Text>
        <div className="">
          <Button variant="dark"
            className="button-box right-button button-grad button-grad:hover"
            onClick={() => selectCustomer(id)}>
            + Checkout
          </Button>
        </div> 
      </Card.Body>
    </Card> 
  )
};

Customer.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  registered_at: PropTypes.string,
  address: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  phone: PropTypes.string,
  account_credit: PropTypes.number,
  movies_checked_out_count: PropTypes.number,
  selectCustomer: PropTypes.func.isRequired,
};

export default Customer;