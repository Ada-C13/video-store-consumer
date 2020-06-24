import React, { useState } from 'react';
import './Rental.css';
import PropTypes from 'prop-types';

const Rental = ({ movie, customer, rentMovie }) => {
  const [isClickedOn, setIsClickedOn] = useState(true);

  if (isClickedOn) {
  return (
    <div>
      { movie && <p> Selected Movie: { movie.title }, Available inventory: {movie.available_inventory} </p> }
      { customer && <p> Selected Customer: { customer.name } </p> }
      { movie && customer ? <button onClick={() => { rentMovie(); setIsClickedOn(false) }}>Rent Movie</button> : ""} 
    </div>
    );
  };
  return ("");
}


Rental.propTypes = {
  movie: PropTypes.object,
  customer: PropTypes.object
}

export default Rental;