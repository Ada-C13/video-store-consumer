import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from "./Movie";

const Details = (props) => {
  const { title } = props.match.params
  const [message, setMessage] = useState(null);
  const [movie, setMovie] = useState(null)
  
  const API_URL_MOVIES = `http://localhost:3000/movies/${title}`
  useEffect(()=>{
    axios.get(API_URL_MOVIES)
    .then((response) => {
      const retrievedMovie = response.data
      setMovie(retrievedMovie)
    })
    .catch((error) => {
      setMessage(error.message);
    });
  }, [API_URL_MOVIES]);

  if (!movie) {
    return (
      <div></div>
    )
  } else {
      return (
      <div className="detail-card">
          <div key={movie.id} className="detail-outer-card">
            <div className='detail-card-container'>
              <img src={movie.image_url} alt={movie.title +"poster"}></img>
              <div className='detail-card-info'>
                <h3>{movie.title}</h3>
                <p>
                  Released: {movie.release_date}
                </p>
                <p>
                  {movie.overview}
                </p>
              </div>
            </div>
            <div>
              {message}
            </div>
          </div>
      </div>
    );
  }
}
export default Details;