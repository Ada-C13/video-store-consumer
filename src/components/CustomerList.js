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
    <div>
      {buildCustomers()}
    </div>

    // TODO: The above code renders the cards, but no grid. The below code shows grid, but cards are too skinny. 

    // <div className="">
    //   <CardDeck>
    //   {buildCustomers()}
    //   </CardDeck>
    // </div>
  );
};

CustomerList.propTypes = {
  customerList: PropTypes.array.isRequired,
  selectCustomer: PropTypes.func.isRequired,
};

export default CustomerList;