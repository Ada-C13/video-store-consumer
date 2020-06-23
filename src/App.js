import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar'
import CustomerList from './components/CustomerList'
import Library from './components/Library'
import Nav from './components/Nav'


import {
  BrowserRouter as Router,Switch,Route,Link
} from "react-router-dom"

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

class App extends Component {
  render() {
    return (
    
      <Router>
      <Nav/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" component={SearchBar} />
        <Route path="/library" component={Library} />
        <Route path="/customers" component={CustomerList} />
        </Switch>
      </Router>
    );
  }
}

export default App;
