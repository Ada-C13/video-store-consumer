import React, { useState, useEffect } from 'react';
import Customer from './Customer';


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
    <div class="ui">
        {customerList}
    </div>
  )
}

export default Customers;