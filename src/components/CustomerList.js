import React from 'react';
import './CustomerList.css';
import PropTypes from 'prop-types';
import Customer from './Customer';


const CustomerList = ({ customerList, selectCustomer }) => {
  const buildCustomers = () => {
    const customer = customerList.map((customer) => {
      return <Customer 
        key={customer.id}
        { ...customer }
        selectCustomer={(id) => selectCustomer(id)}
      />
    });
    return customer;
  }

  return (
    <div>
      <h1>INFORMATION ABOUT CUSTOMERS</h1>
      {buildCustomers()}
    </div>
  )
}

CustomerList.propTypes = {
  customerList: PropTypes.array.isRequired,
  selectCustomer: PropTypes.func.isRequired,
};

export default CustomerList;