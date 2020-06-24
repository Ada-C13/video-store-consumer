import React, { useState } from 'react';
import './MovieSearch.css';
import axios from 'axios';
import SearchForm from './SearchForm.js';
import PropTypes from 'prop-types';

const MovieSearch = ({ addMovieCallback, addMessageCallback }) => {
  const [movies, setMovies] = useState([]);

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
          addMessageCallback(`${response.data.length} movies found`);
        })
        .catch((error) => {
          addMessageCallback(error.message);
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
        {movie.id === 0 || movie.id ? "" : <button onClick={() => { addMovieCallback(movie) }}>Add to rental library</button>}
        </li> )}
      </ol>
    </div>
  )
};

MovieSearch.propTypes = {
  addMovieCallback: PropTypes.func,
  addMessageCallback: PropTypes.func,
}

export default MovieSearch;