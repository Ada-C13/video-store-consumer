import React, { useState, useEffect } from 'react';
import './MovieLibrary.css';
import PropTypes from 'prop-types';
import axios from 'axios';
// import ReleaseYear from './ReleaseYear.js';


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

    

    return (
      <div className='list'>
        <ul className='movie-list'>
          { movies.map((m) => 
            <li key={m.id} className="movie-square">
              <img src={m.image_url} alt={m.title} className='movie-image'></img>
              <div>
                <h3 className='movie-title'>Title: {m.title}</h3>
                <button className='button' onClick={() => { findMovieCallback(m) }}>select</button>
                <p>{m.overview}</p>
                {/* <ReleaseYear releseDate = {m.release_date} /> */}
                <h5 className='movie-date'>Release Date: { m.release_date }</h5>
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