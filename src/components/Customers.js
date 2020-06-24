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
// import axios from 'axios';

// import './Customers.css';
import Customer from './Customer';

const Customers = ({ list, onSelectCallback }) => {
  let match = useRouteMatch();

  const [ clickedCustomer, setClickedCustomer ] = useState(null);

  const customerList = list.map(customer =>
    <li key={customer.id}>
      <Link to={`${match.url}/${customer.id}`} onClick={() => setClickedCustomer(customer)}>{customer.name}</Link>
    </li>
  );

  return (
    <section>
      <h2>Customer List</h2>
      
      <ol>
        {customerList}
      </ol>

      <Switch>
        {
          clickedCustomer && (
            <Route path={`${match.path}/:customerId`}>
              <Customer
                name={clickedCustomer.name}
                registered_at={clickedCustomer.registered_at}
                address={clickedCustomer.address}
                city={clickedCustomer.city}
                state={clickedCustomer.state}
                postal_code={clickedCustomer.postal_code}
                phone={clickedCustomer.phone}
                account_credit={clickedCustomer.account_credit}
                movies_checked_out_count={clickedCustomer.movies_checked_out_count}
                id={clickedCustomer.id}
                onSelectCallback={onSelectCallback}
              />
            </Route>
          )
        }
        <Route path={match.path}>
          <h3>Please click on a customer for more details.</h3>
        </Route>
      </Switch>
    </section>
  );
}

export default Customers;