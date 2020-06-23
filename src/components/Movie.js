import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './Movie.css';

const Movie = (props) => {
 
  
  return (
    <tr>
      <td>{props.id}</td>
      <td><Link to={'/customer/id'}>{props.title}</Link></td>
      <td><img src={props.image_url} alt={props.title}/></td>
      <td className = "w-25">{props.release_date}</td>
      <td className = "w-75"> {props.overview}</td>
      <td>{props.external_id}</td>
    </tr>
  )
}

export default Movie;