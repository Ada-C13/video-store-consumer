
import React, { Component, useState } from 'react';
import './App.css';
import Routing from './components/Routing'
import axios from 'axios';
// import FlashMessage from 'react-flash-message'
import FlashMessage from './components/FlashMessage';

const App = (props) => {

  const [selectedUser, setSelectedUser] = useState(null)
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [flash, setFlash] = useState(null)
  const [error, setError] = useState(undefined)
  const [success, setSuccess] = useState(undefined)

  const onSubmitMovieCallback = (movie) => {
    setSelectedMovie(movie)
  }

  const onSubmitUserCallback = (user) => {
    setSelectedUser(user)
  }

  const checkOut = (selectedUser, selectedMovie) => {
    const url = "http://localhost:3000/";

    axios.post(`${url}rentals/${selectedMovie.title}/check-out`, {
      title: selectedMovie.title,
      customer_id: selectedUser.id,
    })
      .then((response) => {
        setFlash(true)
        setSuccess(`Successfully Checked out`)
      })
      .catch((error) => {
        console.log(`Error: ${error}`)
        setError(error.message)
      })

  }

  const onTimeout = () => {
    console.log("timing out, clearing state");

    // clear success and error messages
    // clear selected customer and movie
    setSuccess(undefined);
    setError(undefined);
    setSelectedUser(null)
    setSelectedMovie(null)
    setFlash(null)
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
      <div>
        <p>Status : {flash ? "Successfully Checked out" : "Not Checked Out"}</p>
      </div>
      <div>
        <input className="add-library-button" type="button" value="checkout" onClick={() => checkOut(selectedUser, selectedMovie)} />
      </div>

      {error
        ? <FlashMessage
          messageContents={error}
          messageClass="error-message"
          onTimeoutCallback={onTimeout} />
        : ""}
      {success
        ? <FlashMessage
          messageContents={success}
          messageClass="success-message"
          onTimeoutCallback={onTimeout} />
        : ""}

      <Routing {...{ onSubmitUserCallback, onSubmitMovieCallback }}
      />

    </section>
  );
};

export default App;
