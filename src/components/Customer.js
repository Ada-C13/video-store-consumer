import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Customer = (props) => {

  const onButtonClick = () => {
    const selected = {
        id: props.id,
        name: props.name
    }
    props.selectCustomerCallback(selected);
  }


  return (
    <tr>
      <td><p>{props.id}</p></td>
      <td>
        <button onClick={onButtonClick} className="btn btn-danger">
          Select
        </button>
      </td>
      <td><p>{props.name}</p></td>
      <td><p>{props.address}<br/>{props.city}, {props.state} {props.postal_code}</p></td>
      <td><p>{props.phone}</p></td>
      <td><p>{new Intl.NumberFormat("en-us", {
          style: "currency",
          currency: "USD"
        }).format(props.account_credit)}</p></td>
      <td><p>{props.movies_checked_out_count}</p></td>
      <td><p>{
      // new Intl.DateTimeFormat("en-us", {
      //       year: "numeric",
      //       month: "numeric",
      //       day: "2-digit"
      //     }).format(
            props.registered_at}</p></td>
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
