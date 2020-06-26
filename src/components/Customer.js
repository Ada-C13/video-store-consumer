import React from 'react';
import PropTypes from 'prop-types';

// import './Customer.css';

const Customer = ({ id, name, registered_at, address, city, state, postal_code, phone, account_credit, movies_checked_out_count }) => {

  return (
    <section className="customer-profile">
      <h3>Customer #{id}: {name}</h3>
      <p>Registered At: {registered_at}</p>
      <p>Address: {address}</p>
      <p>City: {city}</p>
      <p>State: {state}</p>
      <p>Postal Code: {postal_code}</p>
      <p>Phone: {phone}</p>
      <p>Account Credit: {account_credit}</p>
      <p>Movies Checked Out: {movies_checked_out_count}</p>
    </section>
  );
}

Customer.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  registered_at: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  postal_code: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  account_credit: PropTypes.number.isRequired,
  movies_checked_out_count: PropTypes.number.isRequired,
}

export default Customer;