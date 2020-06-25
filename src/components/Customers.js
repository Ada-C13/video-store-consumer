import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Selected from './Selected'

const Customers = () => {
  const API_URL_CUSTOMERS = "http://localhost:3000/customers"

  const [customerList, setCustomerList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [selectedCustomerId, setSelectedCustomerId] = useState(null)

  // Get Cusomter list
  useEffect(()=>{
    axios.get(API_URL_CUSTOMERS)
    .then((response) => {
      const apiCustomerList = response.data;
      setCustomerList(apiCustomerList);
    })
    .catch((error) => {
      setErrorMessage(error.message);
      console.log(error.message);
    });
  }, []);
  
  const onSelectCustomer = (event) =>{
    event.preventDefault();
    setSelectedCustomerId(event.target.value);
  }
  console.log(selectedCustomerId)

  const selectedComponents = () => {
    return(
      <Selected
        customerId = {selectedCustomerId}
      />
    )
  };

  return (
    <div>
      {customerList.map(customer => (
        <div>
          <h1>{customer.name}</h1>
          <p>{customer.id}</p>
          <p>{customer.address}</p>
          <p>{customer.city}</p>
          <p>{customer.state}</p>
          <p>{customer.postal_code}</p> 
          <p>{customer.phone}</p>
          <p>{customer.account_credit}</p>
          <p>{customer.movies_checked_out_count}</p>
          <button value = {customer.id} onClick={onSelectCustomer}>Select this Customer</button>
          {false && selectedComponents()}
        </div>
      ))}
    </div>
  );
}

export default Customers;