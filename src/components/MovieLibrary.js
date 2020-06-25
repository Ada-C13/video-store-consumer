import React, { useState, useEffect } from 'react';
import './MovieLibrary.css';
import PropTypes from 'prop-types';
import axios from 'axios';


const MovieLibrary = ({ findMovieCallback }) => {
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  
    useEffect(() => {
      axios.get("http://localhost:3000/movies")
      .then((response) => {
        setMovies(
          response.data
        );
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
    }, []);

    const movieYear = (date) => {
      const result = new Date(date);
      return result.getFullYear();
    }

    return (
      <div className='list'>
        <ul className='movie-list'>
          { movies.map((m) => 
            <li key={m.id} className="movie-square">
              <img src={m.image_url} alt={m.title} className='movie-image'></img>
              <div>
                <h3 className='movie-title'>Title: {m.title}</h3>
                <button className='select-button' onClick={() => { findMovieCallback(m) }}>select</button>
                <p>{m.overview}</p>
                <h4 className='movie-date'>Release Year: { movieYear(m.release_date) }</h4>
              </div>
            </li> 
          )}
        </ul>
      {errorMessage ? <div><h2 className="validation-errors-display">{errorMessage}</h2></div> : ''}
    </div>
  );
};

MovieLibrary.propTypes = {
  findMovieCallback: PropTypes.func.isRequired
}

export default MovieLibrary;