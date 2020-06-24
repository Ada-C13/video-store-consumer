import React, { useEffect, useState, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import PropTypes from 'prop-types';
import Popup from "reactjs-popup";

// import axios from 'axios';

// import './Movies.css';
import Movie from './Movie';

const Movies = (props) => {
  const movieList = props.list.map((movie, i) => {
    return (
      <li key={i}>
        <div className="movie-list-item">
          <Movie 
            // image ???
            title={movie.title} 
            overview={movie.overview} 
            release_date={movie.release_date}
            inventory={movie.inventory}
            onSelectCallback={props.onSelectCallback}
          />
        </div>
      </li>
    );
  });
  return (
    <section className="movie-list">
      <h2>Movie Library</h2>
      <ul>
        {movieList}
      </ul>
    </section>
  );
}

Movies.propTypes = {
  list: PropTypes.array.isRequired,
  onSelectCallback: PropTypes.func.isRequired,
};

export default Movies;