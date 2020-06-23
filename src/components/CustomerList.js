import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Customer from './Customer';

const CustomerList = ({ customerList, selectCustomer }) => {
  const buildCustomers = () => {
    const customerElements = customerList.map((customer) => {
      return <Customer 
        key={customer.id}
        { ...customer }
        selectCustomer={(id) => selectCustomer(id)}
      />
    });

    return customerElements;
  }

  return (
    <div>
      <h1>CUSTOMER INFORMATION</h1>
      <p>Select both customer and movie in order to create a rental.</p>
      {buildCustomers()}
    </div>
  )
}

CustomerList.propTypes = {
  customerList: PropTypes.array.isRequired,
  selectCustomer: PropTypes.func.isRequired,
};

export default CustomerList;