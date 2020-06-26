import React, { useState, useEffect } from "react";
import axios from 'axios';
import RentalCard from './RentalCard';
import PropTypes from 'prop-types';

const Rentals = (props) => {
  const [error, setErrorMessage] = useState([]);


  
  const checkIn = (title, customer_id) => { 
      console.log(title)
      console.log(customer_id)
      axios.post(`${props.url}rentals/${title}/return`, {
          title: title, 
          customer_id: customer_id
        }) 
          .then((response)=> {
            console.log(response.data);
          })
          .catch((error) => {
            setErrorMessage(error);
          }); 
    }
 

    return (
      <div> 
      <div className="card-list"> 
        { props.rentals.map(rental => (
            <RentalCard rentals={props.rentals} rental={rental} key={rental.external_id} checkInCallback={checkIn} customers={props.customers} library={props.library} currentRentalsCallback={props.currentRentalsCallback}/>
        ))}
     </div>
     </div>
    )

}


Rentals.propTypes = {
  url: PropTypes.string, 
  rentals: PropTypes.array, 
  customers: PropTypes.array, 
  library: PropTypes.array, 
  currentRentalsCallback: PropTypes.func
}

export default Rentals;