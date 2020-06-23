import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Library from './components/Library'
import Customers from './components/Customers'

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/search'>Movie Search Page</Link>
            </li>
            <li>
              <Link to='/library'>Your Library</Link>
            </li>
            <li>
              <Link to='/customers'>List of Customers</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/search'>
            <Search />
          </Route>
          <Route path='/library'>
            <Library />
          </Route>
          <Route path='/customers'>
            <Customers />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Search() {
  return <h2>Movie Search Page</h2>;
}

// function Library() {
//   return <h2>Your rentals' library</h2>;
// }

// function Customers() {
//   return <h2>All the customers</h2>;
// }
