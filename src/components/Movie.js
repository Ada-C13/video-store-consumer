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
        <li>Release Date: {release_date} </li>
        <li><img src={image_url} alt={title}/></li>
        <li>External id: {external_id} </li>
      </ul>
    </div>
    <div className="">
      <Button
        className=""
        onClick={() => selectMovie(id)}>
          Select Movie
      </Button> 
    </div>  
  </div>
  )
};

export default Movie;
