import React from 'react';
import PropTypes from 'prop-types';

export default function RentalCard(props) {
  const onClickReturn = () => {
      props.checkInCallback(props.rental.title, props.rental.customer_id)
      let newRentals = [];
      for(let i = 0; i < props.rentals.length; i ++){
        if (props.rentals[i] !== props.rental){
          newRentals.push(props.rentals[i]);
        } 
      }
      props.currentRentalsCallback(newRentals);
    }
  return (
  <div className="movie-card">
    <div className="class-content"> 
      <h2 className='card--title'> Movie Rented: {props.rental.title} </h2>
      <p className="subtitle"><small>Name: {props.rental.name}</small></p>
    </div>
    <button className="add-movie-button" onClick={onClickReturn}> Check in  </button>
  </div>
  );
}

RentalCard.propTypes = {
  rentals: PropTypes.array, 
  rental: PropTypes.object, 
  checkInCallback: PropTypes.func, 
  customers: PropTypes.array, 
  library:PropTypes.array, 
  currentRentalsCallback: PropTypes.func
}

