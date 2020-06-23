import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({movie}) => {
  return (
    <div>
      <h3> {movie.title} </h3>
      <img src="#{movie.image_url}" alt="#{movie.title}#{movie.external_id}"></img>
      <p> Released on {movie.release_date}</p>
      <p> In stock: {movie.inventory}</p>
      <p> {movie.overview}</p>
    </div>
  )
}
export default Movie;