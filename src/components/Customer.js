import React, { useEffect, useState, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
// import PropTypes from 'prop-types';
// import axios from 'axios';

// import './Customer.css';

const Customer = ({ id, name, registered_at, address, city, state, postal_code, phone, account_credit, movies_checked_out_count, onSelectCallback }) => {

  const customerData = {
    id: id,
    name: name,
    registered_at: registered_at,
    address: address,
    city: city,
    state: state,
    postal_code: postal_code,
    account_credit: account_credit,
    movies_checked_out_count: movies_checked_out_count
  }

  return (
    <section>
      <h3>Customer #{id}: {name}</h3>
      <p>Registered At: {registered_at}</p>
      <p>Address: {address}</p>
      <p>City: {city}</p>
      <p>State: {state}</p>
      <p>Postal Code: {postal_code}</p>
      <p>Phone: {phone}</p>
      <p>Account Credit: {account_credit}</p>
      <p>Movies Checked Out: {movies_checked_out_count}</p>
      <button onClick={() => onSelectCallback(customerData)}>Select Customer for Checkout</button>
    </section>
  );
}

export default Customer;