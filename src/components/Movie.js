import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap/';
import './Movie.css';

const Movie = ({movie, selectMovie}) => {

  const onMovieClick = () => {
    selectMovie(movie.id, movie.title, movie.overview, movie.release_date, movie.image_url, movie.external_id);
  }

  return (
    <Card className="movie-card">
      <div>
        <div className="movie-card-body">
          <img className="movie-card-image" src={movie.image_url} alt={movie.title} />
          <h4 className="movie-card-title"> {movie.title} </h4>
          <div>          
            <div className="movie-card-release-date"> Released on {movie.release_date} </div>
            <div className="movie-card-description"> {movie.overview} </div>
          </div>  
          <button
          type="button"
          className="movie-card-button"
          onClick={onMovieClick}>
            Select
          </button>
        </div>
      </div>
    </Card>
  )
}

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
  // title: PropTypes.string.isRequired,
  // release_date: PropTypes.string.isRequired,
  // overview: PropTypes.string.isRequired,
  // image_url: PropTypes.string,
  // id: PropTypes.number,
};

export default Movie;

