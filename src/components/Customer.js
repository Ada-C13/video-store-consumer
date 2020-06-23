import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Customer = (props) => {
  return (
    <article className="customer card">
      <h5 className="card-title">{props.name}</h5>
      <div className="card-body">
        <p>{props.phone}</p>
      </div>
    </article>
  );
}

Customer.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  registered_at: PropTypes.string,
  address: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  postal_code: PropTypes.string,
  phone: PropTypes.string,
  account_credit: PropTypes.string,
  movies_checked_out_count: PropTypes.string
};

export default Customer;
