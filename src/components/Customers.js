import React, {useState} from 'react';
import axios from 'axios';

const API_URL_CUSTOMERS = "http://http://localhost:3000/customers"

const Customers = () => {

  const [customerList, setCustomerList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  
    axios.get(API_URL_CUSTOMERS)
    .then((response) => {
      const apiCustomerList = response.data;
      setCustomerList(apiCustomerList);
    })
    .catch((error) => {
      setErrorMessage(error.message);
      console.log(error.message);
    });


  return (
    <div>
      <h1>Customer</h1>
        <p>customer list page: lists customers
        1.) On the customer list page, I can see a list of all customers
        2.) From the customer list, I can "select" a customer. My customer selection will continue to be visible as I navigate the app.
        </p>
        <ul>
          <li>{customerList}</li>
        </ul>
    </div>
  );
}

export default Customers;