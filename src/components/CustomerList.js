import React from 'react';
import Customer from './Customer';
import PropTypes from 'prop-types';



import './Customer.css'

const CustomerList = (props) => {

  return (
    <div className="card-list"> 
        { props.customers.map(customer => (
            <Customer customer={customer} key={customer.id} currentCustomerCallback={props.currentCustomerCallback}/>
        ))}
    </div>
  );
}

CustomerList.propTypes = {
  currentCustomerCallback: PropTypes.func,
  customers: PropTypes.array

}
export default CustomerList; 