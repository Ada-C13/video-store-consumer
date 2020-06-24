import React,{useState} from 'react';
import axios from 'axios';

const API_URL_MOVIES = "http://localhost:3000/movies"

const Movie = ({externalId, title, overview, releaseDate, imageUrl, showButton}) => {
  const [message, setMessage] = useState(null);

  const addMovie = (event) =>{
    event.preventDefault();

    axios.post(API_URL_MOVIES, {
      body: {
        title,
        overview,
        release_date: releaseDate,
        image_url: imageUrl,
        external_id: externalId,
      }
    })
    .then((response) => {
      console.log(response.data)
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
        External ID: {externalId}
      </div>
      <div>
       {overview}
      </div>
      {showButton && <button onClick={addMovie}>Add to Movie Library</button>}
    </div>
    
  );
}

export default Movie;
