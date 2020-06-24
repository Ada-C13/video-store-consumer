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

// import './Movies.css';
import Movie from './Movie';

const Movies = () => {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Movie Library</h2>
      
      {/* 
        TODO: Replace the following list with an each loop 
        that renders a link to each movie in the library.
        The numbers on lines 75 and 78 are placeholders to 
        demo the route.
      */}
      <ul>
        <li>
          <Link to={`${match.url}/1`}>Movie 1</Link>
        </li>
        <li>
          <Link to={`${match.url}/2`}>Movie 2</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.path}/:movieId`}>
          <Movie />
        </Route>
        <Route path={match.path}>
          <h3>Please select a movie.</h3>
        </Route>
      </Switch>
    </div>
  );
}

export default Movies;