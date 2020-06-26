import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import './Checkout.css';
import moment from 'moment';

const BASE_URL = 'https://moviestar13.herokuapp.com/rentals/';

const axios = require('axios');

const Checkout = (props) => {

  const [CheckoutMessage, setCheckoutMessage] = useState("");

  const [CustomerAndMovie,setCustomerAndMovie] = useState({
    movie: '',
    customer: ''
  });

  const onSubmitCheckout = (event) => {
    event.preventDefault();

    setCustomerAndMovie({
      movie: props.movie,
      customer: props.customer.id
    });

  }


  useEffect(() => {

    if (CustomerAndMovie.movie == ""){
      return ;
    }

    let new_due_date = new Date;
    new_due_date.setDate(new_due_date.getDate() + 7 );

    axios.post(BASE_URL + CustomerAndMovie.movie + "/check-out", {
      
        customer_id:CustomerAndMovie.customer,
        due_date: new_due_date,

    })

      .then((response) => {
        setCheckoutMessage(props.customer.name + " checked out: " + CustomerAndMovie.movie +"!" + " Due Date " + moment(new_due_date).format('LL') );
        props.setDisplayMessage({message:props.customer.name + " Successfully Checked Out Movie " + CustomerAndMovie.movie , severity: "success"});
        console.log("Successfully Checked Out Movie" + CustomerAndMovie.movie);
      })
      .catch((error)=>{
        props.setDisplayMessage({message: "Failed to check out movie", severity: "error"});
        console.log("FAILED ON API CALL")
      });
      ;

  }, [CustomerAndMovie]);





  return <span>
    <button className="Checkout-checkIn-checkOut MainButton" onClick = {onSubmitCheckout}>
    Check Out Movie
    </button>
    <p>{CheckoutMessage}</p>
    </span>
}

export default Checkout