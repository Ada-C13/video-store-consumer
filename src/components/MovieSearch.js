import React, { useState } from 'react';
import './MovieSearch.css';
import axios from 'axios';
import SearchForm from './SearchForm.js';
import PropTypes from 'prop-types';

const MovieSearch = ({ addMovieCallback, addMessageCallback, findMovieCallback }) => {
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

  const movieYear = (date) => {
    const result = new Date(date);
    return result.getFullYear();
  }

  return (
    <div>
      <SearchForm onSubmitCallback={getMovie} />
      <div className='list'>
        <ul className='movie-list'>
          {movies.map((m) =>
            <li key={m.external_id} className="movie-square">
              <img src={m.image_url} alt={m.title} className='movie-image'></img>
              <div>
                <h3 className='movie-title'>Title: {m.title}</h3>
                {m.id === 0 || m.id ? <button className='select-button' onClick={() => { findMovieCallback(m) }}>select</button> : <button className='add-button' onClick={() => { addMovieCallback(m) }}>Add to rental library</button>}
                <p>{m.overview}</p>
                <h5 className='movie-date'>Release Year: { movieYear(m.release_date) }</h5>
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
};

MovieSearch.propTypes = {
  addMovieCallback: PropTypes.func.isRequired,
  addMessageCallback: PropTypes.func.isRequired,
  findMovieCallback: PropTypes.func.isRequired,
}

export default MovieSearch;