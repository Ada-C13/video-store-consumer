import React, {useState} from 'react';
import axios from "axios";
import CustomerCard from './CustomerCard';

const CustomersList = () => {
  const [error, setError] = useState(null);
  const [customerList, setCustomerList] = useState(null);

  axios.get('http://localhost:3000/customers')
    .then((response) => {
      const data = response.data;
      console.log(`this is response.data ${response.data}`);
      let customerCollection = data.map((customer) => {
        return (
          <CustomerCard
            id = {customer.id}
            name = {customer.name}
            movies_checked_out_count = {customer.movies_checked_out_count}
            registered_at = {customer.registered_at}
            phone = {customer.phone}
            key = {customer.id}
          />
        );
      });
      setCustomerList(customerCollection);
    })
    .catch((error) => {
      setError(error.response);
    });

  return (
    <div>{customerList}</div>
  );
};



export default CustomersList;
