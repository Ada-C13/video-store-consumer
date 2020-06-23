import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Search.css";

const drawMovies = (movieList, onMovieSelectCallback, searchText) => {
  return movieList.map((movie, index) => {
    if (movie.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1) {
      return (
        <tr key={index}>
          <td>{movie.title}</td>
          <td>{movie.release_date}</td>
          <td>
            <img src={movie.image_url} alt="Movie Cover" />
          </td>
          <td>
            <button onClick={() => onMovieSelectCallback(movie.id)}>
              Select Movie
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

  const onSearchChange = (event) => {
    console.log(`Search Field updated ${event.target.value}`);
    setSearchText(event.target.value);
  };

  console.log(`drawing Search...`);
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
              props.movieList,
              props.onMovieSelectCallback,
              searchText
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

Search.propTypes = {
  onMovieSelectCallback: PropTypes.func.isRequired,
};

export default Search;
