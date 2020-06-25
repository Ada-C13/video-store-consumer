import React from "react";
import PropTypes from "prop-types";
import "./Checkout.css";

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

// Checkout Component
const Checkout = (props) => {
  console.log(`rendering Checkout...`, props);
  return (
    <div>
      <h1>Movie Checkout</h1>
      <div className="checkout">
        {renderMovie(props.movieData)}
        {renderCustomer(props.customerData)}
        {renderButton(
          props.customerData,
          props.movieData,
          props.onCheckoutCallback
        )}
      </div>
    </div>
  );
};

Checkout.propTypes = {
  movieData: PropTypes.object.isRequired,
  customerData: PropTypes.object.isRequired,
  onCheckoutCallback: PropTypes.func.isRequired,
};

export default Checkout;
