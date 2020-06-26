import React, { useState, useEffect } from 'react';
import Customer from './Customer';
import './Customers.css'


const Customers = (props) => {

  let customerList = [];

  if (props.customers) {
    customerList = props.customers.map((customer) => {
      return (
        <Customer 
        name={customer.name} 
        customerCallback={props.selectCustomerCallback}
        id={customer.id}
        key={customer.id} 
      />
      );
    });
  }

  return (
    <div className="customerList">
        {customerList}
    </div>
  )
}

export default Customers;