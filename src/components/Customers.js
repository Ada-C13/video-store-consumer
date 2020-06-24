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
import './Customers.css';
import Customer from './Customer';

const Customers = ({ list, onSelectCallback }) => {
  let match = useRouteMatch();

  return (
    <section>
      <h2>Customer List</h2>
      
      <section className="customer-list">
        {list.map(customer =>
          <div key={customer.id} className="customer-list-item">
            <img src={avatar} className="customer-list-item__avatar" alt="customer profile pic" />
            <p className="customer-list-item__name">#{customer.id}: {customer.name}</p>
            <div className="customer-list-item__buttons">
              <Popup trigger={<button>Profile</button>} modal>
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
              <button onClick={() => onSelectCallback(customer)}>Select</button>
            </div>
          </div>
        )}
      </section>

    </section>
  );
}

export default Customers;