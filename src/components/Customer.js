import React from 'react';
import PropTypes from 'prop-types';
import './Customer.css';


const Customer = (props) => {

  const onCustomerClick =() => {
    props.setSelectedCustomerCallBack(props.customer);
    console.log(props.customer);
  }

  return <button className="Customer-name-button" onClick = {onCustomerClick}>
    {props.customer.name}
  </button>

}

Customer.propTypes = {
  setSelectedCustomerCallBack: PropTypes.func.isRequired,
  customer: PropTypes.object
};

export default Customer