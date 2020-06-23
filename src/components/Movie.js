import React , { Component}  from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import { Button } from 'react-bootstrap/';

const Movie = ({ id, title, overview, release_date, image_url, external_id, selectMovie }) => {
  return (
  <div className="">
    <div className="">
      <h3> {title} </h3>
      <ul>
        <li>Overview: {overview} </li>
        <li>Relase Date: {(release_date).substring(0,10)} </li>
        <li>Photo: {image_url} </li>
        <li>External id: {external_id} </li>
      </ul>
    </div>
    <div className="">
      <Button
        className=""
        onClick={() => selectMovie(id)}>
          Add Movie
      </Button> 
    </div>  
  </div>
  )
};

export default Movie;
