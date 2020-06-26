import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Search.css";
import axios from "axios";
import Button from 'react-bootstrap/Button'

const API_URL_BASE = "http://localhost:3000";

const renderMovies = (searchResults, addMovieCallBack, searchText) => {
  return searchResults.map((movie, index) => {
    if (movie.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1) {
      return (
        <div key={index} className="movie-card">
          <div>
            <img className="movie-image" src={movie.image_url} alt="Movie Cover" />
          </div>
          <div>{movie.title}</div>
          <div>{movie.release_date}</div>
          <div>
            <Button variant="primary" onClick={() => addMovieCallBack(movie)}>Add Movie</Button>
          </div>
        </div>
      );
    }
  });
};

// Search Component
const Search = (props) => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (searchText === "") {
      setSearchResults([]);
    } else {
      axios
        .get(API_URL_BASE + `/movies?query=${searchText}`)
        .then((response) => {
          const apiSearchResults = response.data;
          // set state
          setSearchResults(apiSearchResults);
        })
        .catch((error) => {
          // handle errors
          setErrorMessage("search failed");
          setSearchResults([]);
          console.log(error.message);
        });
    }
  }, [searchText]);

  const onSearchChange = (event) => {
    console.log(`Search Field updated ${event.target.value}`);
    setSearchText(event.target.value);
  };

  console.log(`rendering Search...`, props.addMovieCallBack);
  return (
    <div>
      <h1>Search Movie</h1>
      <input
        name="search"
        className="searchbox"
        onChange={onSearchChange}
        value={searchText}
        placeholder="Text to Search"
        type="text"
      />

      <div className="movielist flex-container">
          
        {renderMovies(searchResults, props.addMovieCallBack, searchText)}
        
      </div>
    </div>
  );
};

Search.propTypes = {
  addMovieCallBack: PropTypes.func.isRequired,
};

export default Search;
