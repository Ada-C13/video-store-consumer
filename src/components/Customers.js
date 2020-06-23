import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Customer from './Customer';

const API_CUSTOMER_URL = "http://localhost:3000/customers"

const Customers = () => {

  const [customersList, setCustomersList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);


  useEffect(() => {
    axios.get(API_CUSTOMER_URL)
      .then( (response) => {
        const customers = response.data;
        setCustomersList(customers);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(errorMessage);
      });
  }, [API_CUSTOMER_URL])


  const customersComponents = customersList.map((customerObject) => {
    return(
      <Customer 
        key={customerObject.id}
        id={customerObject.id}
        name={customerObject.name} 
        registered_at={customerObject.registered_at}
        address={customerObject.address} 
        city={customerObject.city} 
        state={customerObject.state} 
        postal_code={customerObject.postal_code} 
        phone={customerObject.phone} 
        account_credit={customerObject.account_credit} 
        movies_checked_out_count={customerObject.movies_checked_out_count} 
      />
    )
  })


  return (
      <div className="d-flex text-left flex-wrap container justify-content-around container-fluid">
        <h2 className="py-2 text-center w-100">Customers</h2>
        <table className="customer table table-striped">
          <thead class="thead-light">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Account Credit</th>
              <th>Current Rentals Count</th>
              <th>Registered</th>
            </tr>
          </thead>
          <tbody>
            {customersComponents}
          </tbody>
        </table>
      </div>
  );
}

export default Customers;


// From our Rails API...pagination:
// data = data.paginate(page: params[:p], per_page: params[:n])