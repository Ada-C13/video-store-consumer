import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Customer = (props) => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
  <td>{props.address}<br/>{props.city}, {props.state} {props.postal_code}</td>
      <td>{props.phone}</td>
      <td>{new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
  }).format(props.account_credit)}</td>
      <td>{props.movies_checked_out_count}</td>
      <td>{props.registered_at}</td>
    </tr>
  );
}

Customer.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  registered_at: PropTypes.string,
  address: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  postal_code: PropTypes.string,
  phone: PropTypes.string,
  account_credit: PropTypes.string,
  movies_checked_out_count: PropTypes.string
};

export default Customer;
