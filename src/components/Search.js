import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './Movie';
import './Search.css';

const Search = () => {
  const base_url = 'http://localhost:3000/movies';

  const [searchText, setSearchText] = useState('');
  const [resultMovies, setResultMovies] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = (event) => {
    event.preventDefault();

    axios
      .get(base_url + '?query=' + searchText)
      .then((response) => {
        var alphabetized = (response.data).sort(function (a, b) {
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
        console.log(response.data);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.message);
      });
  };

  return (
    <div>
      <input 
        className="searchbar" 
        onChange={(e) => setSearchText(e.target.value)} 
        value={searchText}
      />

      <button className="searchbutton" onClick={handleSearch}>Search</button>

      <div className="search-movie-container">
        {resultMovies.map((movieData) => (
          <div className="search-movie-details">
            <p className="movie-title">{movieData.title}</p>
            <p className="movie-overview">{movieData.overview}</p>
            <img src={movieData.image_url} alt="movie-image"/>
            <p className= "movie-inventory">{movieData.inventory}</p>
            <button onClick={() => addMovie(movieData) }>Add to Library</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
