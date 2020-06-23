import React, { useState } from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';

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

  let foundMovies = [];

  if (movies) {
    foundMovies = movies.map((movie) => {
      return (
        <div className="ui card">
          <div className="ui content">
            <p className="ui header">{movie.title}</p>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="ui container">
      <div className="">
        <SearchBar searchMovies={searchMovies} />
      </div>
      <div class="ui horizontal divider">
        Results
      </div>
      <button onClick={searchMovies}>Frozen!</button>
      {foundMovies}
    </div>
  )
}

export default Search;