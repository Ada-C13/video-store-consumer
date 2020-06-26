import React from "react";
import PropTypes from "prop-types";
import "./Checkout.css";

const CHECKOUT_NEVER = 0;
const CHECKOUT_SUCCESS = 1;
const CHECKOUT_FAILURE = 2;

const renderMovie = (movieData) => {
  if (!movieData) {
    return <p>No movie selected</p>;
  } else {
    return (
      <div>
        <h3>Selected Movie</h3>
        <ul>
          <li>Title: {movieData.title}</li>
          <li>Release Date: {movieData.release_date}</li>
          <li>
            <img src={movieData.image_url} alt="Movie Cover" />
          </li>
        </ul>
      </div>
    );
  }
};

const renderCustomer = (customerData) => {
  if (!customerData) {
    return <p>No customer selected</p>;
  } else {
    return (
      <div>
        <h3>Selected Customer</h3>
        <ul>
          <li>Name: {customerData.name}</li>
          <li>Phone: {customerData.phone}</li>
          <li>Movies Checked Out: {customerData.movies_checked_out_count}</li>
        </ul>
      </div>
    );
  }
};

const renderButton = (movieData, customerData, onCheckoutCallback) => {
  if (!customerData || !movieData) {
    return <p>Cannot Checkout - Select Movie and Customer</p>;
  } else {
    return <button onClick={() => onCheckoutCallback()}>Checkout Movie</button>;
  }
};

const renderCheckout = (
  movieData,
  customerData,
  onCheckoutCallback,
  checkoutStatus,
  errorMessage
) => {
  if (checkoutStatus === CHECKOUT_NEVER) {
    return (
      <div className="checkout">
        {renderMovie(movieData)}
        {renderCustomer(customerData)}
        {renderButton(customerData, movieData, onCheckoutCallback)}
      </div>
    );
  }
  if (checkoutStatus === CHECKOUT_FAILURE) {
    return (
      <div className="checkoutFailure">
        Checkout failed. Error: {errorMessage}
      </div>
    );
  }
  if (checkoutStatus === CHECKOUT_SUCCESS) {
    return (
      <div className="checkoutSucess">
        {renderCustomer(customerData)}
        <p>Checkout was successful!</p>
      </div>
    );
  }
};

// Checkout Component
const Checkout = (props) => {
  console.log(`rendering Checkout...`, props);
  return (
    <div>
      <h1>Movie Checkout</h1>
      <div className="checkout">
        {renderCheckout(
          props.movieData,
          props.customerData,
          props.onCheckoutCallback,
          props.checkoutStatus,
          props.errorMessage
        )}
      </div>
    </div>
  );
};

Checkout.propTypes = {
  movieData: PropTypes.object,
  customerData: PropTypes.object,
  onCheckoutCallback: PropTypes.func.isRequired,
  checkoutStatus: PropTypes.number.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

export default Checkout;
