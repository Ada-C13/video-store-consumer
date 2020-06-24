import React, { useState, useEffect } from 'react';
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

  return (
    <div>
      <SearchForm onSubmitCallback={getMovie} />
      <ul>
        {movies.map((m) => <li key={m.external_id}>{m.title}</li> )}
      </ul>
      {errorMessage ? <div><h2 className="validation-errors-display">{errorMessage}</h2></div> : ''}
    </div>
  )
};

MovieSearch.propTypes = {
  movies: PropTypes.array,
}

export default MovieSearch;