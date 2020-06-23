import React, { useState } from 'react';
import SearchBar from './SearchBar';
import searchResults from './SearchResults';
import axios from 'axios';
import SearchResults from './SearchResults';

const SEARCH_URL = "http://localhost:3000/search";

const Search = () => {
  const [movies, setMovies] = useState([]);

  const searchMovies = (query) => {
    axios.get(SEARCH_URL, {
      params: {
        query: query
      }
    })
      .then((response) => {
        const searchResult = response.data;
        setMovies(searchResult);
      })
      .catch((error) => {
        // Still need to handle errors
        // setErrorMessage(error.message);
      });
  };

  return (
    <div className="ui container">
      <div className="">
        <SearchBar searchMovies={searchMovies} />
      </div>
      <div class="ui horizontal divider">
        Results
      </div>
      <SearchResults foundMovies={movies}/>
    </div>
  )
}

export default Search;