import React, { useEffect, useState, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
// import PropTypes from 'prop-types';
// import axios from 'axios';

// import './Movie.css';

{/* 
  TODO: This function is where the details on each movie
  will be rendered, if we want to add another view. We'll 
  want more than the movieID passed in as params, and 
  line 102 is placeholder text.
*/}
const Movie = () => {
  let { movieId } = useParams();
  return <h3>Requested movie ID: {movieId}</h3>;
}

export default Movie;