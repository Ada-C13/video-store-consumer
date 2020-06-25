import React , { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Movie from './Movie';


const RentalLibrary = (props) => {
  const API_MOVIES_URL = 'http://localhost:3000/movies'
  
  const [movies, setMovieList] = useState([])
  const [errorMessage, setErrorMessage] = useState(null);

  // get list of movie objects from API and update state
  useEffect( () => {
    axios.get(API_MOVIES_URL)
      .then((response) => { 
        setMovieList(response.data);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
    }, []);

  // turn each movie object into a movie component
  const moviesComponents = movies.map((moviesObj) => {
    return(< Movie 
      id={moviesObj.id}
      title={moviesObj.title} 
      image_url={moviesObj.image_url}
      key={moviesObj.id}
      onClickCallback= {props.onClickCallback}
    />)
  })

        
  return (
    <div className="rental-library">
      <h1>Rental Library</h1>
      <section className="grid-columns">
        {moviesComponents}
      </section>
    </div>
  );
}

export default RentalLibrary;