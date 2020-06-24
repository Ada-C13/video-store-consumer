import React from 'react';
import PropTypes from 'prop-types';

const Customer = (props) => {
  const { id, name, registered_at, address, city, state, postal_code, phone, account_credit, selectCustomerCallback } = props;

  return (
    <div className="card customer-card">
        {id} - {name} - {phone}
        <button
          className="btn btn-primary select-customer"
          onClick={() => { selectCustomerCallback(id) }}
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
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  registered_at: PropTypes.instanceOf(Date).isRequired,
  address: PropTypes.string.isRequired,
  state: PropTypes.string,
  postal_code: PropTypes.string,
  phone: PropTypes.string,
  account_credit: PropTypes.number,
  selectCustomerCallback: PropTypes.func
}

export default Customer;