import React, { useState } from 'react';
import './MovieSearch.css';
import axios from 'axios';
import SearchForm from './SearchForm.js';
import PropTypes from 'prop-types';

const MovieSearch = ({ addMovieCallback }) => {
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
      <ol>
        {movies.map((movie) => <li key={movie.external_id}>
        <img src={movie.image_url} alt={movie.title} ></img>
        {movie.title}
        {movies.length === 1 ? "" : <button onClick={() => { addMovieCallback(movie) }}>Add to rental library</button>}
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