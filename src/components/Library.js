import React from "react";
import PropTypes from "prop-types";
import "./Library.css";
import Button from 'react-bootstrap/Button'

const renderMovies = (movieList, onMovieSelectCallback) => {
  return movieList.map((movie, index) => {
    return (
      <div key={index} className="movie-card">
        <div>
          <img className="movie-image" src={movie.image_url} alt="Movie Cover" />
        </div>
        <div>{movie.title}</div>
        <div>{movie.release_date.substring(0, 4)}</div>
        <div>
          <Button variant="primary"  onClick={() => onMovieSelectCallback(movie.id)}>
            Select Movie
          </Button>
        </div>
      </div>
    );
  });
};

// Library Component
const Library = (props) => {
  console.log(`rendering Library...`, props);
  return (
    <div>
      <h1>Movie Library</h1>
      <div className="movielist flex-container">
          
        {renderMovies(props.movieList, props.onMovieSelectCallback)}
           
      </div>
      <Button variant="primary" onClick={() => props.onMovieSelectCallback(2)}>
        Select Movie
      </Button>
    </div>
  );
};

Library.propTypes = {
  onMovieSelectCallback: PropTypes.func.isRequired,
  movieList: PropTypes.array.isRequired,
};

export default Library;
