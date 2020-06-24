import React, { useState, useEffect } from "react";
import axios from 'axios';
import Movie from './Movie';
import './Search.css';

const Search = () => {
  const base_url = "http://localhost:3000/movies"

  const [searchText, setSearchText] = useState("");
  const [resultMovies, setResultMovies] = useState([]);
  const [error, setError] = useState(null);


  const handleSearch = (event) => {
    event.preventDefault()

    axios.get(base_url + "?query=" + searchText)
      .then((response) => {
        setResultMovies(response.data);
      })
      .catch((error) => {
        setError(error.message);
    })
  };

  const addMovie = (movieData) => {
    axios.post(base_url, movieData)
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
        {resultMovies.map(movieData => 
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
