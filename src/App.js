import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
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
              <Search />
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
        The numbers on lines 74 and 77 are placeholders to 
        demo the route.
      */}
      <ul>
        <li>
          <Link to={`${match.url}/1`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/2`}>
            Props v. State
          </Link>
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
  will be rendered. We'll want more than the movieID passed
  in as params, and line 102 is placeholder text.
*/}
function Movie() {
  let { movieId } = useParams();
  return <h3>Requested movie ID: {movieId}</h3>;
}

function Customers() {
  return <h2>Customer List</h2>;
}

export default App;
