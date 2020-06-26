import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

const Search = ({ API_URL_BASE }) => {
  const [selectedMovie, setSelectedMovie] = useState({});
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [newMovie, setNewMovie] = useState({});
  const [error, setError] = useState(undefined);
  const { query } = useParams();

  const resetSearchState = () => {
    setSearchedMovies([]);
  };

  const selectMovie = (movie) => {
    setSelectedMovie(movie);
  };

  const searchMovie = useCallback(
    (query) => {
      if (query !== null) {
        axios
          .get(API_URL_BASE + `/movies?query=${query}`)
          .then((response) => {
            if (response.data !== undefined) {
              console.log(response);
              setSearchedMovies(response.data);
            }
          })
          .catch((error) => {
            setError(error.errors);
            setSearchedMovies([]);
          });
      }
    },
    [API_URL_BASE]
  );

  useEffect(() => {
    if (query.length) {
      searchMovie(query);
    }
  }, [searchMovie, query]);

  const addMovie = (movie) => {
    axios
      .post(API_URL_BASE + "/movies", movie)
      .then((response) => {
        if (response.data !== undefined) {
          setNewMovie(response.data);
        }
      })
      .catch((error) => {
        console.log({ error });
        setError(error.response.data.errors);
      });
  };

  const listMovies = () => {
    return searchedMovies.map((movie, i) => {
      let movieURL = movie.image_url;
      return (
        <div key={i}>
          <h4>{movie.title}</h4>
          <img
            src={movieURL}
            alt={movie.title}
            onClick={() => {
              selectMovie(movie);
            }}
            className={movie === selectedMovie ? "" : null}
          ></img>
          <p>{movie.overview}</p>
          <button onClick={() => addMovie(movie)}>
            Add Movie to Inventory
          </button>
        </div>
      );
    });
  };

  return (
    <section>
      {error}
      <section>{listMovies()}</section>
    </section>
  );
};

Search.propTypes = {
  API_URL_BASE: PropTypes.string.isRequired,
};

export default Search;
