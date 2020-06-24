import React, { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import axios from "axios";
import PropTypes from "prop-types";

const SEARCH_URL = "http://localhost:3000/search";

const Search = (props) => {
  const [movies, setMovies] = useState([]);

  const searchMovies = (query) => {
    axios
      .get(SEARCH_URL, {
        params: {
          query: query,
        },
      })
      .then((response) => {
        const searchResult = response.data;
        setMovies(searchResult);
        props.setError(null);
      })
      .catch((error) => {
        props.setError(error.message);
      });
  };

  return (
    <div className="ui container mt mb">
      <div className="">
        <SearchBar searchMovies={searchMovies} />
      </div>
      <div className="ui horizontal divider">Results</div>
      {movies.length > 0 && (
        <SearchResults
          foundMovies={movies}
          library={props.library}
          setError={props.setError}
          addMovie={props.addMovie}
        />
      )}
    </div>
  );
};

Search.propTypes = {
  library: PropTypes.array,
  setError: PropTypes.func.isRequired,
  addMovie: PropTypes.func.isRequired,
};

export default Search;
