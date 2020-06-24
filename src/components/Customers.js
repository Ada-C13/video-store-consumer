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

const Customers = () => {
  return <h2>Customer List</h2>;
}

export default Customers;