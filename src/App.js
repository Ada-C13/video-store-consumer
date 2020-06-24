
import React, { Component, useState } from 'react';
import './App.css';
import Routing from './components/Routing'
import axios from 'axios';
import FlashMessage from 'react-flash-message'

const App = (props) => {

  const [selectedUser, setSelectedUser] = useState(null)

  const onSubmitUserCallback = (user) => {
    console.log(user)
    setSelectedUser(user)
    // return (
    // <div>
    //   <FlashMessage duration={5000}>
    //     <strong>I will disapper in 5 seconds!</strong>
    //   </FlashMessage>
    // </div>
    // )
  }

  const [selectedMovie, setSelectedMovie] = useState(null)
  const [flash, setFlash] = useState(null)

  const onSubmitMovieCallback = (movie) => {
    console.log(movie)
    setSelectedMovie(movie)
  }

  const checkOut = (selectedUser, selectedMovie) => {
    const url = "http://localhost:3000/";
    // const someDate = new Date();

    axios.post(`${url}rentals/${selectedMovie.title}/check-out`, {
      title: selectedMovie.title,
      customer_id: selectedUser.id,
      // due_date: someDate + 5
    })
      .then((response) => {
        console.log(response)
        setFlash(true)
        // return (
        //   <div>
        //     <FlashMessage duration={5000}>
        //       <strong>I will disapper in 5 seconds!</strong>
        //     </FlashMessage>
        //   </div>
        // )
      })
      .catch((error) => {
        console.log(`Error: ${error}`)
      })

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
      <Routing {...{ onSubmitUserCallback, onSubmitMovieCallback }}
      />

    </section>
  );
};

export default App;
