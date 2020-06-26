import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SearchLibraryMovie.css';

const Search = ({setStatusCallback}) => {
  const base_url = 'http://localhost:3000/movies';

  const [searchText, setSearchText] = useState('');
  const [resultMovies, setResultMovies] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = (event) => {
    event.preventDefault();

    axios
      .get(base_url + '?query=' + searchText)
      .then((response) => {
        const alphabetized = (response.data).sort(function (a, b) {
          if(a.title.toLowerCase() < b.title.toLowerCase()) return -1;
          if(a.title.toLowerCase() > b.title.toLowerCase()) return 1;
          return 0;
        });

        setResultMovies(alphabetized);
        console.log(alphabetized);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.message);
      });
  };

  const addMovie = (movieData) => {
    axios
      .post(base_url, movieData)
      .then((response) => {
        setStatusCallback("Movie successfully added to Libary");
        console.log(response.data);
      })
      .catch((error) => {
        setStatusCallback("Error: Unable to add movie to Library");
        setError(error.message);
        console.log(error.message);
      });
  };

  return (
    <div>
      <h2>Search Results</h2>
      <div class="searchbar">
        <input class="searchbar-bar" onChange={(e) => setSearchText(e.target.value)} value={searchText}/>

        <button className="searchbar-button" onClick={handleSearch}>Search</button>
      </div>

      {resultMovies.map((movieData) => (
        <div className="movie-container">
          <div className="movie-details">
            <img src={movieData.image_url} alt="movie-poster"/>
            <p className="movie-title">{movieData.title}</p>
            <p className="movie-overview">{movieData.overview}</p>
          </div>
          <button class="movie-button" onClick={() => addMovie(movieData) }>Add to Library</button>
          </div>
        ))}
      </div>
  );
};

export default Search;
