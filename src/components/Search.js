import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Search.css";

const axios = require('axios');
const API_URL_BASE = 'http://localhost:3000';

const drawMovies = (searchResults, addMovieCallBack, searchText) => {
  return searchResults.map((movie, index) => {
    if (movie.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1) {
      return (
        <tr key={index}>
          <td>{movie.title}</td>
          <td>{movie.release_date}</td>
          <td>
            <img src={movie.image_url} alt="Movie Cover" />
          </td>
          <td>
            <button onClick={() => addMovieCallBack(movie.id)}>
              Add Movie
            </button>
          </td>
        </tr>
      );
    }
  });
};

// Search Component

const Search = (props) => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const onSearchChange = (event) => {
    console.log(`Search Field updated ${event.target.value}`);
    setSearchText(event.target.value);

    axios.get(API_URL_BASE + `/movies?query=${searchText}`)
    .then((response) => {
      const apiSearchResults = response.data;
        // set state
      setSearchResults(apiSearchResults);
    })
    .catch((error) => {
      // handle errors
      // setErrorMessage("search failed");
      // console.log(error.message);
    });
  };

  console.log(`drawing Search...`, props.addMovieCallBack);
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

      <div className="movielist">
        <table>
          <thead>
            <tr>
              <td>Title</td>
              <td>Release</td>
              <td>Cover</td>
              <td>Select</td>
            </tr>
          </thead>
          <tbody>
            {drawMovies(
              searchResults,
              props.addMovieCallBack,
              searchText
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

Search.propTypes = {
  addMovieCallBack: PropTypes.func.isRequired,
};

export default Search;
