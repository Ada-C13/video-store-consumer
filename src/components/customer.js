import React from 'react';
import PropTypes from 'prop-types';

const Customer = (props) => {
  const { customer, selectCustomerCallback } = props;

  const { id, name, registered_at, address, city, state, postal_code, phone, account_credit } = customer;

  const someCustomer = () => { 
    selectCustomerCallback(customer)
    console.log(customer)
  }

  return (
    <div className="card customer-card">
        {id} - {name} - {phone}

        <button
          className="btn btn-primary select-customer"
          onClick={someCustomer}
        >
          Select
        </button>
        {name}
        <p>{phone}</p>
        {account_credit}

    </div>
  );
};

Customer.propTypes = {
  customer: PropTypes.object.isRequired,
  selectCustomerCallback: PropTypes.func.isRequired
}

export default Customer;