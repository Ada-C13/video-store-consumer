import React from'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/'

const CustomerList = () => {

  axios
  .get(BASE_URL + '/customers')
  .then((response) => {
    const newCustomerList = response.data;
    // setCardsList(newCardsList);
    // setErrorMessage(null);
  })
  .catch((error) => {
    console.log(error.message);
    // setErrorMessage(error.message);
  });

  const allCustomers = newCustomerList.map((customer) => {
		return (
      <div>
        customer.name
      </div>
		);
	});


  return (
    <h3>Customers</h3>
    {allCustomers}
  )
}

export default CustomerList;