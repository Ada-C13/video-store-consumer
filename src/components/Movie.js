import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap/';
import './Movie.css';

const Movie = ({movie, selectMovie, action}) => {

  const onMovieClick = () => {
    selectMovie(movie.id, movie.title, movie.overview, movie.release_date, movie.image_url, movie.external_id);
  }

  return (
    <div className="container d-flex flex-column" >
      <div 
        className="portrait-hover-effect text-justify" 
        ds-title={movie.title} 
        ds-desc={`${movie.overview} (${movie.release_date})`}>
        <img src={movie.image_url} alt={movie.title} className="movie-img" />
      </div>
      <button
          type="button"
          className="btn btn-dark text-light movie-btn"
          onClick={onMovieClick}>
            {action}
      </button>
    </div>
  )
}

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
  selectMovie: PropTypes.func.isRequired,
  action: PropTypes.string.isRequired,
};

export default Movie;

