import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import axios from 'axios';
import "../App.css"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_URL_MOVIES = "http://localhost:3000/movies"

const Library = ({onUpdateCurrentMovie}) => {
  const [movieList, setMovieList] = useState([])
  const [message, setMessage] = useState(null);
  console.log(movieList)
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
              <h1>{movie.title}</h1>
              <p>
                Released: {movie.release_rate}
              </p>
              <p>
                {movie.overview}
              </p>
            </div>
          </div>
          <div className="card-buttons">
            <Link to={`/details/${movie.title}`}><Button variant="outline-secondary">Details</Button></Link>
            <br/>
            <Button variant="outline-secondary" value={movie.title} onClick={onSelectMovieClick}>Select this Movie</Button>
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