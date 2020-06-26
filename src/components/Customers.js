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
        const allCustomers = (response.data).sort(function (a, b) {
          if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
          if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
          return 0;
        });
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
      <table className="table">
        <thead>
          <th width="200">Name</th>
          <th width="250">Address</th>
          <th width="125">City</th>
          <th width="75">State</th>            
          <th width="100">Postal Code</th>
          <th width="125">Phone</th>
          <th width="100">Account Credit</th>
          <th width="50">Movies Checked Out</th>
        </thead>
      </table>
      {cutomersList}
    </div>
  );
};
export default Customers;
