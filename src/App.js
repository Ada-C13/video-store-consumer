
import React, { Component, useState } from 'react';
import './App.css';
import Routing from './components/Routing'
import axios from 'axios';
// import FlashMessage from 'react-flash-message'
import FlashMessage from './components/FlashMessage';
import picture1 from './images/Picture1.png';

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
      <span className="top">
        <span className="container">
          <div className="selected_wording">
            <p>Selected User : {selectedUser ? selectedUser.name : "Not Selected" }</p>
          </div>
          <div className="selected_wording">
            <p>Selected Movie : {selectedMovie ? selectedMovie.title : "Not Selected"}</p>
          </div>
          <div className="selected_wording">
            <p>Status : {flash ? "Successfully Checked out" : "Not Checked Out"}</p>
          </div>
        </span>
        <div className="item-a">
          <input className="checkout-button" type="button" value="Checkout" onClick={() => checkOut(selectedUser, selectedMovie)} />
        </div>

        <div className="logo">
          <img src={picture1} width="140" height="125" />
        </div>
      </span>
      <br></br>
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
      <span className='navbar'>
        <Routing {...{ onSubmitUserCallback, onSubmitMovieCallback }}
        />
      </span>
  
    </section>
  );
};

export default App;
