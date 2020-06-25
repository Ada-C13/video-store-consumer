import React from 'react';
import PropTypes from 'prop-types';
import './Customer.css';
import { Button } from 'react-bootstrap/';
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'

const Customer = ({ id, name, address, city, state, registered_at, phone, account_credit, movies_checked_out_count, selectCustomer }) => {
  return (
    <div className="">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Account Credit: {account_credit} 
          </Card.Text>
          <Card.Text>Movies Checked Out: {movies_checked_out_count}</Card.Text>
          <Card.Text>Date Registered: {(registered_at)}</Card.Text>
          <Card.Text>Phone: {phone}</Card.Text>
          <Card.Text>Address: {address}, {city}, {state}</Card.Text>
          {/* <div className="">
            <Button
              className=""
              onClick={() => selectMovie(id)}>
              + Checkout
            </Button>
          </div> */}
            {/* <Card.Text>External ID:{external_id}</Card.Text>
          </div> */}
        </Card.Body>
      </Card>
    </div>










  // <div className="">
  //   <div className="">
  //     <h3> {name} </h3>
  //     <ul>
  //       <li>Account Credit: {account_credit} </li>
  //       <li>Movies Checked Out: {movies_checked_out_count} </li>
  //       <li>Date Registered: {(registered_at).substring(0,10)} </li>
  //       <li>Phone: {phone} </li>
  //       <li>Address: {address}, {city}, {state} </li>
  //     </ul>
  //   </div>
  //   <div className="">
  //     <Button
  //       className=""
  //       onClick={() => selectCustomer(id)}>
  //         Select Customer
  //     </Button> 
  //   </div>  
  // </div>
  )
};
export default Customer;