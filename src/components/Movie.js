import React,{useState} from 'react';
import { BrowserRouter as Router, Link, Route, Switch, useRouteMatch,} from 'react-router-dom';
import axios from 'axios';
import Details from "./Details";

const API_URL_MOVIES = "http://localhost:3000/movies"

const Movie = ({externalId, title, overview, releaseDate, imageUrl, showAddButton, showDetailButton}) => {
  const [message, setMessage] = useState(null);
  const [movie, setMovie] = useState(null)

  const addMovie = (event) =>{
    event.preventDefault();

    axios.post(API_URL_MOVIES, {
        title,
        overview,
        release_date: releaseDate,
        image_url: imageUrl,
        external_id: externalId,
    })
    .then((response) => {
      const retrievedMovie = response.data
      setMovie(retrievedMovie)
    })
    .catch((error) => {
      setMessage(error.message);
      console.log(message);
    });
  }

  return (
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
        External ID{externalId}
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
      
    
    </div>
    
  );
}

export default Movie;
