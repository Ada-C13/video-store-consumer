import React from "react";
import PropTypes from "prop-types";
import "./Library.css";

const drawMovies = (movieList, onMovieSelectCallback) => {
  return movieList.map((movie, index) => {
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
  });
};

// Library Component
const Library = (props) => {
  console.log(`drawing Library...`, props);
  return (
    <div>
      <h1>Library</h1>
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
            {drawMovies(props.movieList, props.onMovieSelectCallback)}
          </tbody>
        </table>
      </div>
      <button onClick={() => props.onMovieSelectCallback(2)}>
        Select Movie
      </button>
    </div>
  );
};

Library.propTypes = {
  onMovieSelectCallback: PropTypes.func.isRequired,
  movieList: PropTypes.array.isRequired,
};

export default Library;
