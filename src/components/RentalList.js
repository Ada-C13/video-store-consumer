import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rental from './Rental';
import './RentalList.css';

const RentalList = ({ rentalList, returnRental }) => {
  const buildRentals = () => {
    console.log (rentalList)
    const rentalElements = rentalList.map((rental) => {
      return <Rental 
        key={rental.id}
        { ...rental }
        returnRental={(movie, customer) => returnRental(movie, customer)}
      />
    });

    return rentalElements;
  }

  return (
    <div>
    <div>
 
    </div>
      <h1>RENTAL INFORMATION</h1>
      <p>Select rental to return it.</p>
      {buildRentals()}
    </div>
  )
}

RentalList.propTypes = {
  rentalList: PropTypes.array.isRequired,
  selectCustomer: PropTypes.func.isRequired,
};

export default RentalList;