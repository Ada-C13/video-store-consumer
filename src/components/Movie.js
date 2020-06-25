import React,{useState} from 'react';
import { BrowserRouter as Router, Link, Route, Switch, useRouteMatch,} from 'react-router-dom';
import axios from 'axios';
import Selected from './Selected'
import "./Movie.css"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


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
      setMessage(`Successfully added ${title} to library!`)
    })
    .catch((error) => {
      console.log(error.message)
      setMessage(`${title} already exists in the library!`)
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
   <div className="outer-card">
      <div className='card-container'>
        <img src={imageUrl} alt={title +"poster"}></img>
        <div className='card-info'>
          <h1>{title}</h1>
          <p>
            Released: {releaseDate}
          </p>
          <p>
            {overview}
          </p>
        </div>
      </div>
      <div className="card-buttons">
        {showAddButton && <Button variant="outline-secondary" onClick={addMovie}>Add to Movie Library</Button>}
        {showDetailButton && <Link to={`/details/${title}`}><Button variant="outline-secondary">Details</Button></Link>}
        <br/>
        {selectMovieButton && <Button variant="outline-secondary" onClick={selectMovie}>Select this Movie</Button>}
      </div>
      <div>
       {message}
        {false && selectedMovieComponents()}
      </div>
   </div>
    
    
    
  );
}

export default Movie;
