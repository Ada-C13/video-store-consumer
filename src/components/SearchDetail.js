import React from 'react';
import PropTypes from 'prop-types';
import './SearchDetail.css';


const SearchDetail = (props) => {

  if (!props.movie.title) return null ; 

  return <div className="Search-detail-movie-container">
    <h3>Movie Details:</h3>
      <p><span className="Search-detail-movie-details">Movie: </span>{props.movie.title}, <span className="Search-detail-movie-details">Release Date: </span>{props.movie.release_date}</p>
      <p><span className="Search-detail-movie-details">Overview: </span> {props.movie.overview}</p>
      <img src = {props.movie.image_url} alt="alt"/>
  </div>
} ;

export default SearchDetail 