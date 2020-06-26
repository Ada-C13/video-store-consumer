import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import axios from 'axios';
import "../App.css"

const API_URL_MOVIES = "http://localhost:3000/movies"

const Library = ({onUpdateCurrentMovie}) => {
  const [movieList, setMovieList] = useState([])
  const [message, setMessage] = useState(null);

  useEffect(()=>{
    axios.get(API_URL_MOVIES)
    .then((response) => {
      const apiMovieList = response.data;
      /* found this sorting code here:https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/ */
      const sortedApiMovieList = apiMovieList.sort((a, b) => (a.title > b.title) ? 1 : (a.title === b.title) ? ((a.externalId < b.externalId) ? 1 : -1) : -1 )
      setMovieList(sortedApiMovieList);
    })
    .catch((error) => {
      setMessage(error.message);
    });
  }, []);

  const onSelectMovieClick = (event) =>{
    event.preventDefault();
    onUpdateCurrentMovie(event.target.value)
  }

  return (
    <div className="movie-list">
      {movieList.map(movie => (
        <div key={movie.id} className="outer-card">
          <div className='card-container'>
            <img src={movie.image_url} alt={movie.title +"poster"}></img>
            <div className='card-info'>
            <div className="card-info-text">
              <h3>{movie.title}</h3>
              <p>
                Released: {movie.release_date}
              </p>
            </div>
            </div>
          </div>
          <div className="card-buttons">
            <Link to={`/details/${movie.title}`}><button className="btn btn-outline-secondary" >Details</button></Link>
            <br/>
            <button className="btn btn-outline-secondary" value={movie.title} onClick={onSelectMovieClick}>Select this Movie</button>
          </div>
          <div>
            {message}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Library;