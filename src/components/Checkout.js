import React, { useEffect, useState, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
// import PropTypes from 'prop-types';
import Popup from "reactjs-popup";

import avatar from './user.png'
import './Checkout.css';
import Customer from './Customer';
import Movie from './Movie';

const Checkout = ({ customer, movie, onSubmitCallback }) => {

  const customerID = {
    customer_id: customer.id,
  };

  const movieTitle = {
    title: movie.title,
  };

  const [dueDate, setDueDate] = useState({
    due_date: new Date(),
  });

  const onInputChange = (event) => {
    const newDueDate = {
      ...dueDate
    };

    newDueDate[event.target.name] = event.target.value;
    setDueDate(newDueDate);
  };
  
  const submitRentalForm = (event) => {
    event.preventDefault();
    onSubmitCallback(customerID, movieTitle, dueDate);
  };
  
  return (
    <section>
      <h2>Checkout</h2>

      <section className="checkout-form__header">
        <h4>Customer</h4>
        <h4>Movie</h4>
      </section>

      <section className="checkout-form">
        { 
          customer && (
            <div className="checkout-form-customer">
              <img src={avatar} className="checkout-form-customer__avatar" alt="customer profile pic" />
              <p className="checkout-form-customer__name">#{customer.id}: {customer.name}</p>
              <div className="checkout-form-customer__buttons">
                <Popup trigger={<button className="checkout-form__button">Profile</button>} modal>
                  <Customer
                    name={customer.name}
                    registered_at={new Date(customer.registered_at).toString()}
                    address={customer.address}
                    city={customer.city}
                    state={customer.state}
                    postal_code={customer.postal_code}
                    phone={customer.phone}
                    account_credit={customer.account_credit}
                    movies_checked_out_count={customer.movies_checked_out_count}
                    id={customer.id}
                  />
                </Popup>
                <Link to="/customers" className="checkout-form__button">Change</Link>
              </div>
            </div>
          )
        }
        { 
          !customer && (
            <div className="checkout-form-customer">
              <p>No customer selected.</p>
            </div>
          )
        }
        { 
          movie && (
            <div className="checkout-form-movie">
              <img src={movie.image_url} className="checkout-form-movie__cover" alt="movie cover pic" />
              <p className="checkout-form-movie__title">{movie.title}</p>
              <div className="checkout-form-movie__buttons">
                <Popup trigger={<button className="checkout-form__button">Details</button>} modal>
                  <Movie />
                </Popup>
                <Link to="/movies" className="checkout-form__button">Change</Link>
              </div>
            </div>
          )
        }
        { 
          !movie && (
            <div className="checkout-form-movie">
              <p>No movie selected.</p>
            </div>
          )
        }
      </section>
    </section>
  );
}

export default Checkout;