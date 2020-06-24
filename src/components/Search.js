import React from 'react';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Movie from './Movie';
import './Search.css';
import PropTypes from "prop-types";

const Search = (props) => {
  const base_url = "http://localhost:3000/"

  const [searchText, setSearchText] = useState("");
  const [resultMovies, setResultMovies] = useState([]);
  const [errors, setErrors] = useState(null);

  const onInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const onSubmitCallback = (event) => {
    event.preventDefault()
    props.onSubmitCallback(movie);
    
  }


  const handleSearch = () => {
    if (searchText !== "" && searchText !== undefined && searchText !== null) {
      axios.get(base_url + "/movies?query=" + searchText)
      .then((response) => {
        setResultMovies(response.data);
      })
      .catch((error) => {
        setErrors(error.message);
      })
    }
  };

  const addMovie = (movieData) => {
    axios.post(base_url + "/movies", movieData)
      .then((response) => {
        console.log(response);
      })
      .catch()
  }

  return (
    <div>
      <input
        name="search"
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
      />

      <button onClick={handleSearch}>
        Search
      </button>

      <div>
        {result.map(movieData => 
          <div>
            <p>{movieData.title}</p>
            <button onClick={() => addMovie(movieData)}>Add to Library</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
