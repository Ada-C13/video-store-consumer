import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../App.css';

const Customers = ({onUpdateCurrentCustomer}) => {
  const API_URL_CUSTOMERS = "http://localhost:3000/customers"

  const [customerList, setCustomerList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  

  // Get Cusomter list
  useEffect(()=>{
    axios.get(API_URL_CUSTOMERS)
    .then((response) => {
      const apiCustomerList = response.data;
      setCustomerList(apiCustomerList);
    })
    .catch((error) => {
      setErrorMessage(error.message);
    });
  }, []);
  
  const onSelectCustomerClick = (event) =>{
    event.preventDefault();
    onUpdateCurrentCustomer(event.target.value)
  }

  return (
    <div>
      <table className="table table-hover">
      <tbody>
        <tr className="hover-row">
          <th>Name</th>
          <th>ID</th>
          <th>Address</th>
          <th>City</th>
          <th>State</th>
          <th>Postal Code</th> 
          <th>Phone</th>
          <th>Checked Out <br/> Count</th>
          <th>Select</th>
        </tr>
        {customerList.map(customer => (
          <tr className="hover-row" key={customer.id}>
            <td>{customer.name}</td>
            <td>{customer.id}</td>
            <td>{customer.address}</td>
            <td>{customer.city}</td>
            <td>{customer.state}</td>
            <td>{customer.postal_code}</td> 
            <td>{customer.phone}</td>
            <td>{customer.movies_checked_out_count}</td>
            <button className="btn btn-outline-secondary" value = {customer.id} onClick={onSelectCustomerClick}>Select this Customer</button>
          </tr>
      ))}
      </tbody>
      </table>
      {errorMessage}
    </div>
  );
}

export default Customers;