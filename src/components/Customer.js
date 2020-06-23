import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Customer = (props) => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>
        <form action="">
            <input type="submit"
            className="btn btn-primary"
            value="Select"
            // onClick={() => selectCustomer(props.id)}
            />
        </form> 
      </td>
      <td>{props.name}</td>
      <td>{props.address}<br/>{props.city}, {props.state} {props.postal_code}</td>
      <td>{props.phone}</td>
      <td>{new Intl.NumberFormat("en-us", {
          style: "currency",
          currency: "USD"
        }).format(props.account_credit)}</td>
      <td>{props.movies_checked_out_count}</td>
      <td>{
      // new Intl.DateTimeFormat("en-us", {
      //       year: "numeric",
      //       month: "numeric",
      //       day: "2-digit"
      //     }).format(
            props.registered_at}</td>
    </tr>
  );
}

Customer.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  registered_at: PropTypes.string,
  address: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  postal_code: PropTypes.string,
  phone: PropTypes.string,
  account_credit: PropTypes.number,
  movies_checked_out_count: PropTypes.number
};

export default Customer;
