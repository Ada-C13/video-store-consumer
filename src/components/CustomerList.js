import React from 'react';
import './CustomerList.css';
import PropTypes from 'prop-types';
import Customer from './Customer';
import CardDeck from 'react-bootstrap/CardDeck'


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
    <div className="card-deck library">
      <div className="card-deck">
        <CardDeck>
        {buildCustomers()}
        </CardDeck>
      </div>
    </div>
  );
};

CustomerList.propTypes = {
  customerList: PropTypes.array.isRequired,
  selectCustomer: PropTypes.func.isRequired,
};

export default CustomerList;