import React, {useState} from 'react';
import PropTypes from "prop-types";
import './App.css';
import axios from 'axios';
import {Link} from 'react-router-dom'

const SearchResult = (props) => {

  const API_CREATE_MOVIE_URL = "http://localhost:3000/movies"

  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  
  const onSelect = (event) => {
      const newMovieFields = {
        ...props
      }

      console.log(API_CREATE_MOVIE_URL)
      console.log(newMovieFields)
    

      axios.post(API_CREATE_MOVIE_URL, newMovieFields)
        .then((response) => { 
          console.log("made new movie")
          console.log(response.data)
          setSuccessMessage(`Successfully added 1 copy of "${props.title}" to library`);
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });

        console.log(newMovieFields)
  }

  return (
    <div className="movie-container">
      <section className="search-messages">
        {successMessage ? <div className="success-message"><h2>{successMessage}</h2></div> : ''}
        {errorMessage ? <div className="error-message"><h3>{errorMessage}</h3></div> : ''}
      </section>
      <section>
      <h3>{props.title}</h3>
      <img src={props.image_url} alt="movie poster"/>
      <button className="library-button" onClick={onSelect}>Add to Libray</button>
      </section> 
    </div>
  )
}


SearchResult.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  image_url: PropTypes.string
};

export default SearchResult;

