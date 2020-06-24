import React, { useState } from 'react';
import './MovieSearch.css';
import PropTypes from 'prop-types';
import axios from 'axios';
import SearchForm from './SearchForm.js';

export function MovieSearch() {
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const getMovie = (query) => {
    if (query !== null) {
      axios.get("http://localhost:3000/movies", {
        params: {
          query: query,
        }
      })
        .then((response) => {
          setMovies(
            response.data
          );
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    };
  };

  const addMovie = (movie) => {
    axios.post('http://localhost:3000/movies', movie)
    .then(() => {
    })
    .catch((error) => {
      setErrorMessage(error.message);
    });
  };

  return (
    <div>
      <SearchForm onSubmitCallback={getMovie} />
      <ol>
          {movies.map((movie) => <li key={movie.external_id}>
          <img src={movie.image_url} alt={movie.title} ></img>
          {movie.title}
          <button onClick={addMovie(movie)}>Add to rental library</button>
          </li> )}
          
        </ol>
      {errorMessage ? <div><h2 className="validation-errors-display">{errorMessage}</h2></div> : ''}
    </div>
  )
};
MovieSearch.propTypes = {
  movies: PropTypes.array,
}

export default MovieSearch;