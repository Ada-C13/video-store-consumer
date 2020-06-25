import React,{useState} from 'react';
import { BrowserRouter as Router, Link, Route, Switch, useRouteMatch,} from 'react-router-dom';
import axios from 'axios';
import Selected from './Selected'

const API_URL_MOVIES = "http://localhost:3000/movies"

const Movie = ({externalId, title, overview, releaseDate, imageUrl, showAddButton, showDetailButton, selectMovieButton}) => {
  const [message, setMessage] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null)
  
  const addMovie = (event) =>{
    event.preventDefault();

    axios.post(API_URL_MOVIES, {
        title,
        overview,
        release_date: releaseDate,
        image_url: imageUrl,
        external_id: externalId,
    })
    .then(() => {
      setMessage(`Successfully added ${title} to library`)
    })
    .catch((error) => {
      setMessage(error.message);
      console.log(message);
    });
  }

  const selectMovie = (event) =>{
    event.preventDefault();
    setSelectedMovie(title);
  }

  const selectedMovieComponents = () => {
    return(
      <Selected
        movieTitle = {selectedMovie}
      />
    )
  };
  
  return (
    <table>
      <div>
      <div>
        <img src={imageUrl} alt={title +"poster"}></img>
      </div>
      <div>
        {title}
      </div>
      <div>
        {releaseDate}
      </div>
      <div>
        External ID: {externalId}
      </div>
      <div>
      {overview}
      </div>
      <div>
        {showAddButton && <button onClick={addMovie}>Add to Movie Library</button>}
      </div>
      <div>
        {showDetailButton && <Link to={`/details/${title}`}><button>Details</button></Link>}
      </div>
      <div>
        {selectMovieButton && <button onClick={selectMovie}>Select this Movie</button>}
      </div>
      <div>
        {message}
        {false && selectedMovieComponents()}
      </div>
    
    </div>
    </table>
    
    
  );
}

export default Movie;
