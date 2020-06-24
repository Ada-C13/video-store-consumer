import React, {useState} from 'react';
import PropTypes from "prop-types";
import './App.css';
import axios from 'axios';

const SearchResult = (props) => {

  const API_CREATE_MOVIE_URL = "http://localhost:3000/movies"

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
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });

        console.log(newMovieFields)
  }

  return (
    <div>
      <h3>{props.title}</h3>
      <img src={props.image_url} alt="movie poster"/>
      <button onClick={onSelect}>Add to Libray</button>
    </div>
  )
}


SearchResult.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  image_url: PropTypes.string
};

export default SearchResult;

