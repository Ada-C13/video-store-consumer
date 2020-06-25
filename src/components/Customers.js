import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Selected from './Selected'
import '../App.css';

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
      <table className="customers-table">
        <tr>
          <th className="customers-table-item">Name</th>
          <th className="customers-table-item">ID</th>
          <th className="customers-table-item">Address</th>
          <th className="customers-table-item">City</th>
          <th className="customers-table-item">State</th>
          <th className="customers-table-item">Postal Code</th> 
          <th className="customers-table-item">Phone</th>
          <th className="customers-table-item">Account Credit</th>
          <th className="customers-table-item">Movies Checked Out Count</th>
          <th className="customers-table-item">Select</th>
        </tr>
      {customerList.map(customer => (
        <tr>
          <td className="customers-table-item">{customer.name}</td>
          <td className="customers-table-item">{customer.id}</td>
          <td className="customers-table-item">{customer.address}</td>
          <td className="customers-table-item">{customer.city}</td>
          <td className="customers-table-item">{customer.state}</td>
          <td className="customers-table-item">{customer.postal_code}</td> 
          <td className="customers-table-item">{customer.phone}</td>
          <td className="customers-table-item">{customer.account_credit}</td>
          <td className="customers-table-item">{customer.movies_checked_out_count}</td>
          <button value = {customer.id} onClick={onSelectCustomer}>Select this Customer</button>
          {false && selectedComponents()}
        </tr>
      ))}
      </table>
    </div>
  );
}

export default Customers;