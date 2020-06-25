  
import React from 'react';
import PropTypes from 'prop-types';
import './Rental.css';
import { Button } from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';

const Rental = ({ id, customer, movie, due_date, returned, returnRental }) => {
  return (
    <div className="card">
      <section className="rental-header">
        <p><strong>Rental ID: {id}</strong></p>
        <p>Customer Name: {customer.name} </p>
        <p>Movie Name: {movie.title} </p>
        <p>Due Date: {due_date} </p>

        {returned ? "" :
          <Button
          className="btn btn-dark"
          onClick={() => returnRental(movie, customer)}>
            Return Rental
          </Button>
        }
      </section>
    </div>
  )
}

Rental.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Rental;