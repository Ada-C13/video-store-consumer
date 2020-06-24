import React, { useState, useEffect } from 'react';
import './MovieLibrary.css';
import PropTypes from 'prop-types';
import axios from 'axios';


const MovieLibrary = ({ pickMovieCallback }) => {
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
      <div className='list' >
        <ul>
          {movies.map((m) => 
            <li key={m.id}>
                {m.title}
                {" "}
                <button onClick={() => { pickMovieCallback(m) }}>select</button>
            </li> 
          )}
        </ul>
      {errorMessage ? <div><h2 className="validation-errors-display">{errorMessage}</h2></div> : ''}
    </div>
  );
};

MovieLibrary.propTypes = {
  pickMovieCallback: PropTypes.func.isRequired
}

export default MovieLibrary;