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


// import axios from 'axios';

import './Movies.css';
import Movie from './Movie';

const Movies = (props) => {
  const movieList = props.list.map((movie, i) => {
    return (
      <div key={i}>
          <Movie 
            // image ??? >> in the api there is an image method for 
            // movie but it doesn't seem like it is made available by the api as is
            // lee: image_url is available! we can test this by looking at the endpoint in a browser http://localhost:3000/movies. i added it to the line below and in Movie.js (line 24) because i need it for the checkout page, too
            image_url={movie.image_url}
            title={movie.title} 
            overview={movie.overview} 
            release_date={movie.release_date}
            inventory={movie.inventory}
            onSelectCallback={props.onSelectCallback}
            id={movie.id}
          />
      </div>
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