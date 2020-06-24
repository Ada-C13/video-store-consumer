import React from 'react';
import './Rental.css';
import PropTypes from 'prop-types';

const Rental = ({ movie, customer, rentMovie }) => {
  return (
    <div>
      {console.log(movie)}
      { movie && <p> Selected Movie: { movie.title }, Available inventory: {movie.available_inventory} </p> }
      { customer && <p> Selected Customer: { customer.name } </p> }
      { (movie && customer) && <button onClick={() => { rentMovie() }}>Rent Movie</button>} 
    </div>
  );
};

Rental.propTypes = {
  movie: PropTypes.object,
  customer: PropTypes.object
}

export default Rental;

