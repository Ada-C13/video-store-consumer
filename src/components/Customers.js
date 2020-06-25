import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Customer from './Customer';

// const API_CUSTOMER_URL = "http://localhost:3000/customers"

const Customers = (props) => {
  const [customersList, setCustomersList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);


  useEffect(() => {
    axios.get(props.url)
      .then( (response) => {
        const customers = response.data;
        setCustomersList(customers);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(errorMessage);
      });
  }, [props.url])

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
        selectCustomerCallback={props.selectCustomerCallback}
      />
    )
  })


  return (
      <div className="w-100 d-flex text-center flex-wrap justify-content-around">
        <h2 className="text-center w-100 pt-3 pb-3">Customers</h2>
        <table className="table table-hover table-light">
          <thead className="thead-light text-center">
            <tr>
              <th>ID</th>
              <th>Select</th>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Account Credit</th>
              <th>Current Rentals</th>
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

Customers.propTypes = {
  url: PropTypes.string.isRequired
};
export default Customers;


// From our Rails API...pagination:
// data = data.paginate(page: params[:p], per_page: params[:n])