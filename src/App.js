import React from 'react';
import './App.css';
import Nav from './Nav';
import Customers from './Customers';
import RentalLibrary from './RentalLibrary';
import Search from './Search';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/customers" component={Customers} />
          <Route path="/library" component={RentalLibrary} />
          <Route path="/search" component={Search} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;