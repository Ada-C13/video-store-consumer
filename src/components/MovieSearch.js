import React, { useState } from 'react';
import './MovieSearch.css';
import axios from 'axios';
import SearchForm from './SearchForm.js';

const MovieSearch = () => {
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

export default MovieSearch;