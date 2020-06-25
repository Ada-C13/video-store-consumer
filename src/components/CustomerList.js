import React from 'react';
import PropTypes from 'prop-types';
import Customer from './Customer';

const CustomerList = ({ customerList, selectCustomer }) => {
  const allCustomers = () => {
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
      <h3>Customer List</h3>
      { allCustomers() }
    </div>
  )
}

CustomerList.propTypes = {
  customerList: PropTypes.array.isRequired,
  selectCustomer: PropTypes.func.isRequired,
};

export default CustomerList;