import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import PropTypes from 'prop-types';
import Popup from "reactjs-popup";
import DayPickerInput from 'react-day-picker/DayPickerInput';

import avatar from './user.png'
import './Checkout.css';
import 'react-day-picker/lib/style.css';

import Customer from './Customer';

const Checkout = ({ customer, movie, onSubmitCallback }) => {

  const [dueDate, setDueDate] = useState(null);

  const handleDateChange = (date) => {
    setDueDate(date.toJSON());
  };
  
  const submitRentalForm = (event) => {
    event.preventDefault();
    onSubmitCallback(movie, customer, dueDate);
  };
  
  return (
    <section>
      <h2>Checkout</h2>

      <section className="checkout__header">
        <h4>Customer</h4>
        <h4>Movie</h4>
      </section>

      <section className="checkout__selections">
        { 
          customer && (
            <div className="checkout-customer">
              <div className="checkout-customer__info">
                <img src={avatar} className="checkout-customer__avatar" alt="customer profile pic" />
                <p className="checkout-customer__name">#{customer.id}: {customer.name}</p>
                <Popup trigger={<button className="checkout__button smaller-button">Profile</button>} modal>
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
              </div>
              <div className="checkout-customer__buttons">
                <Link to="/customers" className="checkout__button">Change</Link>
              </div>
            </div>
          )
        }
        { 
          !customer && (
            <div className="checkout-customer">
              <p>No customer selected.</p>
              <div className="checkout-customer__buttons">
                <Link to="/customers" className="checkout__button">Browse Customers</Link>
              </div>
            </div>
          )
        }
        { 
          movie && (
            <div className="checkout-movie">
              <div className="checkout-movie__info">
                <img src={movie.image_url} className="checkout-movie__cover" alt="movie cover pic" />
                <p className="checkout-movie__title">{movie.title}</p>
                <Popup trigger={<button className="checkout__button smaller-button">Details</button>} modal>
                  <section className="movie-details">
                    <h3>{movie.title}</h3>
                    <p>{movie.overview}</p>
                    <p>Released: {movie.release_date}</p>
                    <p>Inventory: {movie.inventory}</p>
                </section>
                </Popup>
              </div>
              <div className="checkout-movie__buttons">
                <Link to="/library" className="checkout__button">Change</Link>
              </div>
            </div>
          )
        }
        { 
          !movie && (
            <div className="checkout-movie">
              <p>No movie selected.</p>
              <div className="checkout-movie__buttons">
                <Link to="/library" className="checkout__button">Browse Library</Link>
              </div>
            </div>
          )
        }
        <div className="checkout">
          <form className="checkout-form" onSubmit={submitRentalForm}>
            <div className="checkout-form__form">
              <label className="checkout-form__form-label" htmlFor="due date"></label>
              <DayPickerInput 
                onDayChange={handleDateChange} 
                placeholder="due date (YYYY-M-D)" />
              <input type="submit" className="checkout__button button-primary" value="Create Rental"/>
            </div>
          </form>
        </div>
      </section>
    </section>
  );
}

Checkout.propTypes = {
  customer: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      registered_at: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      postal_code: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      account_credit: PropTypes.number.isRequired,
      movies_checked_out_count: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
  movie: PropTypes.objectOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      inventory: PropTypes.number.isRequired,
      onSelectCallback: PropTypes.func.isRequired,
      key: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
  onSubmitCallback: PropTypes.func.isRequired,
};

export default Checkout;