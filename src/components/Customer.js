import React from 'react';
import PropTypes from 'prop-types';
// import emoji from 'emoji-dictionary';
import './Customer.css';

const Customer = (props) => {
 
  return(
  <div> 
    {props.id}
    {props.name}
    {props.registered_at}
    {props.phone}
    {props.movies_checked_out_count}
    {props.account_credit}
    {props.address}
    {props.city}
    {props.postal_code}
    {props.state}
  </div>)
}

export default Customer