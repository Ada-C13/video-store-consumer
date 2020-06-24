import React from 'react';
import PropTypes from 'prop-types';

const SearchDetail = (props) => {

  if (!props.movie.title) return null ; 

  return <div>
    <h5>Movie Details:</h5>
      <p>Movie: {props.movie.title}, Release Date: {props.movie.release_date}</p>
      <p>Overview: {props.movie.overview}</p>
      <img src = {props.movie.image_url} alt="alt"/>
  </div>
} ;

export default SearchDetail 