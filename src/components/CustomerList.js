import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Customer from './Customer';
import './CustomerList.css';

const CustomerList = ({ customerList, selectCustomer }) => {
  const buildCustomers = () => {
    console.log (customerList)
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
    <div>
 
    <h3>Search for a Movie:</h3>
      <div>
        <input
        />
      </div>
      <div className="submit-padding"><button type="submit">Search</button> 
      </div>
   

      

  
    </div>
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