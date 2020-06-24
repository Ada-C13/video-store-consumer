import React, { useEffect, useState, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
// import PropTypes from 'prop-types';
import Popup from "reactjs-popup";

import avatar from './user.png'
import './Checkout.css';
import Customer from './Customer';
import Movie from './Movie';

const Checkout = ({ customer, movie, onSubmitCallback }) => {

  return (
    <section className="checkout-form">
      { 
        customer && (
          <div className="checkout-form-customer">
            <img src={avatar} className="checkout-form-customer__avatar" alt="customer profile pic" />
            <p className="checkout-form-customer__name">#{customer.id}: {customer.name}</p>
            <div className="checkout-form-customer__buttons">
              <Popup trigger={<button className="checkout-form__button">Profile</button>} modal>
                <Customer
                  name={customer.name}
                  registered_at={new Date(customer.registered_at).toString()}
                  address={customer.address}
                  city={customer.city}
                  state={customer.state}
                  postal_code={customer.postal_code}
                  phone={customer.phone}
                  account_credit={customer.account_credit}
                  movies_checked_out_count={customer.movies_checked_out_count}
                  id={customer.id}
                />
              </Popup>
              <Link to="/customers" className="checkout-form__button">Change</Link>
            </div>
          </div>
        )
      }
    </section>
  );
}

export default Checkout;