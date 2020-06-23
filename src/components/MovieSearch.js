import React, { useState, useEffect } from 'react';
import './MovieSearch.css';
import PropTypes from 'prop-types';
import axios from 'axios';
import SearchForm from './SearchForm.js';

export function MovieSearch() {
  const [movies, getMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

    useEffect((query) => {
      if (query !== null) {
      axios.get("http://localhost:3000/movies", {
        params: {
          query: query,
        }
      })
      .then((response) => {
        getMovies(
          response.data.results
        );
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
    };
    }, []);
  
    return (
      <div>
        <SearchForm onSubmitCallback={MovieSearch} />
          {movies}
        {errorMessage ? <div><h2 className="validation-errors-display">{errorMessage}</h2></div> : ''}
      </div>
  )
};

MovieSearch.propTypes = {
  movies: PropTypes.array,
}

export default MovieSearch;