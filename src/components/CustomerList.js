import React, { useEffect, useState } from'react';
import PropTypes from 'prop-types';
import Customer from './Customer';

import axios from 'axios';

const BASE_URL = 'http://localhost:3000/'

const CustomerList = () => {
  const [customerList, setCustomerList] = useState([])
  const [ errorMessage, setErrorMessage ] = useState(null);

  useEffect( () => {
    axios
    .get(BASE_URL + 'customers')
    .then((response) => {
      console.log('hello')
      console.log(response.data)
      const newCustomerList = response.data;
      setCustomerList(newCustomerList);
      setErrorMessage(null);
    })
    .catch((error) => {
      console.log(error.message);
      setErrorMessage(error.message);
    });

  }, [])



  const allCustomers = customerList.map((customer) => {
		return (
			<div key={customer.id}>
				<Customer id={customer.id} name={customer.name} address={customer.address} />
			</div>
		);
	});


  return (
    <>
      <h3>Customers</h3>
      { allCustomers }
    </>
  )
}

export default CustomerList;