import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap/';
import './Movie.css';

const Movie = ({movie, selectMovieCallback}) => {
  return (
    <div className="movie-card">
      <img className="movie-card-image" src={movie.image_url} alt={movie.title} />
      <div className="movie-card-body">
        <h4 className="movie-card-title"> {movie.title} </h4>
        <p className="movie-card-release-date"> Released on {movie.release_date} </p>
        <p className="movie-card-description"> {movie.overview} </p>
        <button
        type="button"
        className="movie-card-button"
        onClick={() => selectMovieCallback(movie.id)}>
          Select
      </button>
      </div>
    </div>
  )
}

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default Movie;

