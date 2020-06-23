import React, { useEffect, useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import axios from 'axios'; 
import PropTypes from 'prop-types';
import './App.css';

const App = () => {
  const [ searchResults, setSearchResults ] = useState([]);
  const [ errorMessage, setErrorMessage ] = useState(null);

  const searchMovies = (search) => {
    axios.get('http://localhost:3000/movies', { params: search })
    .then((response) => {
      console.log("Here's the response", response.data);
      setSearchResults(response.data);
    })
    .catch((error) => {
      console.log("Here's an error", error);
      setErrorMessage(error.response.data.cause);
    });
  };

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search">Movie Search</Link>
          </li>
          <li>
            <Link to="/library">Movie Library</Link>
          </li>
          <li>
            <Link to="/customers">Customer List</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/search">
            <Search results={searchResults} onSearchMovieCallback={searchMovies} />
          </Route>
          <Route path="/library">
            <Movies />
          </Route>
          <Route path="/customers">
            <Customers />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return <h2>Home</h2>;
}

const Search = ({ results, onSearchMovieCallback }) => {
  // TODO: Make a SearchResult child component
  // TODO: render results into an array of SearchResult components using map

  const [query, setQuery] = useState({
    query: "",
  });

  const onInputChange = (event) => {
    const newQuery = {
      ...query
    };

    newQuery[event.target.name] = event.target.value;
    setQuery(newQuery);
  };
  
  const onSubmit = (event) => {
    event.preventDefault();
    onSearchMovieCallback(query);
  };

  return (
    <section className="movie-search">
      <h2>Movie Search</h2>
      <form className="movie-search-form" onSubmit={onSubmit}>
        <div className="movie-search-form__header"></div>
        <div className="movie-search-form__form">
          <label className="movie-search-form__form-label" htmlFor="query">query</label>
          <input 
            className="movie-search-form__form-textarea" 
            type="query" 
            name="query"
            placeholder="search here" 
            value={query.query}
            onChange={onInputChange}
          />
          <input type="submit" className="movie-search-form__form-button" value="Search Movies"/>
        </div>
      </form>
      {results}
    </section>
  ); 
}

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

const Customers = () => {
  return <h2>Customer List</h2>;
}

function Home() {
  return <h2>Home</h2>;
}

function Search() {
  return <h2>Movie Search</h2>;
}

function Movies() {
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

{/* 
  TODO: This function is where the details on each movie
  will be rendered, if we want to add another view. We'll 
  want more than the movieID passed in as params, and 
  line 102 is placeholder text.
*/}
function Movie() {
  let { movieId } = useParams();
  return <h3>Requested movie ID: {movieId}</h3>;
}

function Customers() {
  return <h2>Customer List</h2>;
}

export default App;
