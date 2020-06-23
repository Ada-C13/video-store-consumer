import React, { useState,  useEffect } from 'react';
import './CustomerList.css';
import PropTypes from 'prop-types';
import axios from 'axios';
import Customer from './Customer'

const CustomerList = (props) => {
  
  const API_CUSTOMER_URL = `${props.url}/customers`
  const [customerList, setCustomerList] = useState([])
  const [message, setMessage] = useState(null);

  useEffect(()=>{
    axios.get(API_CUSTOMER_URL)
      .then((response) => {
        const customerList = response.data;
        setCustomerList(customerList);
      })
      .catch((error) => {
        setMessage(error.message);
        console.log(error.message);
      });
  }, [API_CUSTOMER_URL])

  const customerComponents = customerList.map((customer) => {
    return(
      <Customer
        key = {customer.id}
        id = {customer.id}
        id = {customer.name}
        address = {customer.address}
        city = {customer.city}
        state = {customer.state}
        postal_code = {customer.postal_code}
        phone = {customer.phone}
        registered_at = {customer.registered_at}
        movies_checked_out_count = {customer.movies_checked_out_count}
        account_credit = {customer.account_credit}
      />
    )
  })


  return (
      <div>
        {customerComponents}
      </div>
  );
};
export default CustomerList;