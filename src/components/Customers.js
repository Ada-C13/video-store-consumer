import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomerDetails from '../components/CustomerDetails';
import './CustomerDetails.css';

const Customers = (props) => {
  const [customers, setCustomers] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:3000/customers')
      .then((response) => {
        const allCustomers = response.data;
        setCustomers(allCustomers);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);

  const cutomersList = customers.map((customer) => {
    return (
      <CustomerDetails
        key={customer.id}
        id={customer.id}
        name={customer.name}
        registered_at={customer.registered_at}
        address={customer.address}
        city={customer.city}
        state={customer.state}
        postal_code={customer.postal_code}
        phone={customer.phone}
        account_credit={customer.account_credit}
        movies_checked_out_count={customer.movies_checked_out_count}
        setSelectedCustomerCallBack={props.setSelectedCustomerCallBack}
      />
    );
  });

  return (
    <div>
      <h1>Customers</h1>
      <thead>
        <tr>
          <th width= "300">Name</th>
          <th width= "300">Registered At</th>
          <th width= "300">Address</th>
          <th width= "300">City</th>
          <th width= "300">State</th>            
          <th width= "300">Postal Code</th>
          <th width= "300">Phone</th>
          <th width= "300">Account Credit</th>
          <th width= "300">Movies Checked Out</th>
        </tr>
      </thead>
      {cutomersList}
    </div>
  );
};
export default Customers;
