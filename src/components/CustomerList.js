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
    <div className="container d-flex flex-column align-items-center">
      
      <div className="d-flex flex-row justify-content-center align-items-center">
        <img className="popcorn-header w-25" src="https://images.unsplash.com/photo-1587132129911-80e544e7e7b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1006&q=80" alt="popcorn as icon" />
        <h3>. . . Customers</h3>
      </div>

      <div className="d-flex flex-row flex-wrap justify-content-center customers-box">
        { allCustomers() }
      </div>
    </div>
  )
}

CustomerList.propTypes = {
  customerList: PropTypes.array.isRequired,
  selectCustomer: PropTypes.func.isRequired,
};

export default CustomerList;