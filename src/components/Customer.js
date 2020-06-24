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

// import './Customer.css';

const Customer = ({ id, name, registered_at, address, city, state, postal_code, phone, account_credit, movies_checked_out_count }) => {

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
    </section>
  );
}

export default Customer;