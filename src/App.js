
import React, { Component, useState } from 'react';
import './App.css';
import Routing from './components/Routing'

const App = () => {

  const [selectedUser, setSelectedUser] = useState(null)

  const onSubmitUserCallback = (user) => {
    console.log(user)
    setSelectedUser(user)
  }

  const [selectedMovie, setSelectedMovie] = useState(null)

  const onSubmitMovieCallback = (movie) => {
    console.log(movie)
    setSelectedMovie(movie)
  }

  return (
    <section>
      {/* <header className="header">
        <h1 className="header__h1"><span className="header__text">Welcome to insert title movies...</span></h1>
      </header> */}
      <div>
        <p>Selected User : {selectedUser ? selectedUser.name : "Not Selected" }</p>
      </div>
      <div>
        <p>Selected Movie : {selectedMovie ? selectedMovie.title : "Not Selected"}</p>
      </div>
      <Routing {...{ onSubmitUserCallback, onSubmitMovieCallback }}
      />
    </section>
  );
};

export default App;
