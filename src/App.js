
import React, { Component } from 'react';
import './App.css';
import Store from './components/Store';
import Library from './components/Library';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const App = () => {

  return (
    <section>
      <header className="header">
        <h1 className="header__h1"><span className="header__text">Movies</span></h1>
      </header>
    </section>
  );
};

export default App;
