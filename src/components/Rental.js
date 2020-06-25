import React, { useState } from 'react';
import './Rental.css';
import PropTypes from 'prop-types';

const Rental = ({ movie, customer, rentMovie }) => {
  const [isClickedOn, setIsClickedOn] = useState(true);

  if (isClickedOn) {
  return (
    <div class="messageWrap">
      { movie && <p> Selected Movie: <strong>{ movie.title }</strong> --- Available inventory: <strong>{movie.available_inventory}</strong> </p> }
      { customer && <p> Selected Customer: <strong>{ customer.name }</strong></p> }
      { movie && customer ? <button class="select-button" onClick={() => { rentMovie(); setIsClickedOn(false) }}>Rent Movie</button> : ""} 
    </div>
    );
  };
  return (setIsClickedOn(true));
}


Rental.propTypes = {
  movie: PropTypes.object,
  customer: PropTypes.object
}

export default Rental;