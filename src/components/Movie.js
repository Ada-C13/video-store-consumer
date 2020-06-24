import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './Movie.css';

const Movie = (props) => {

  const onButtonClick = () => {
    const selected = {
        id: props.id,
        title: props.title
    }
    props.selectMovieCallback(selected);
  }

 
  
  return (
    <tr>
      <td>{props.id}</td>
      <td>
        <button onClick={onButtonClick} className="btn btn-primary">
          Select
        </button>
      </td>
      <td><Link to={'library'}>{props.title}</Link></td>
      <td><img src={props.image_url} alt={props.title}/></td>
      <td className = "w-25">{props.release_date}</td>
      <td className = "w-75"> {props.overview}</td>
      <td>{props.external_id}</td>
    </tr>
  )
}

export default Movie;