import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';


const Movie = (props) => {
  
  return(
  <div> 
    {props.id}
    {props.title}
    {props.overview}
    {props.release_date}
    {props.image_url}
    {props.external_id}
  </div>)
}

export default Movie