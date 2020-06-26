import React from 'react';
import PropTypes from 'prop-types';
import Popup from "reactjs-popup";

import avatar from './user.png'
import './Customers.css';

import Customer from './Customer';

const Customers = ({ list, onSelectCallback }) => {
  return (
    <section>
      <h2>Customer List</h2>
      
      <section className="customer-list">
        {list.map(customer =>
          <div key={customer.id} className="customer-list-item">
            <img src={avatar} className="customer-list-item__avatar" alt="customer profile pic" />
            <p className="customer-list-item__name">#{customer.id}: {customer.name}</p>
            <div className="customer-list-item__buttons">
              <Popup trigger={<button className="customer-button">Profile</button>} modal>
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
              <button className="customer-button button-primary" onClick={() => onSelectCallback(customer)}>Select</button>
            </div>
          </div>
        )}
      </section>

    </section>
  );
}

Customers.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ),
  onSelectCallback: PropTypes.func.isRequired,
}

export default Customers;