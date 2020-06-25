import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import axios from 'axios';
import "./Library.css"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

 /* found this sorting code here:https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/ */
//  .sort((a, b) => (a.props.title > b.props.title) ? 1 : (a.props.title === b.props.title) ? ((a.props.externalId < b.props.externalId) ? 1 : -1) : -1 )
const API_URL_MOVIES = "http://localhost:3000/movies"

const Library = ({onUpdateCurrentMovie}) => {
  const [movieList, setMovieList] = useState([])
  const [message, setMessage] = useState(null);
  // const [selectedMovie, setSelectedMovie] = useState(null)
  
  useEffect(()=>{
    axios.get(API_URL_MOVIES)
    .then((response) => {
      const apiMovieList = response.data;
      setMovieList(apiMovieList);
    })
    .catch((error) => {
      setMessage(error.message);
    });
  }, []);

  const onSelectMovieClick = (event) =>{
    event.preventDefault();
    // setSelectedMovie(event.target.value);
    onUpdateCurrentMovie(event.target.value)
  }


  // const onButtonClick = () => {
  //   const updatedStudent = {
  //     fullName: props.fullName,
  //     birthday: props.birthday,
  //     email: props.email,
  //     // Toggle present to a new value
  //     present: !props.present,
  //     id: props.id,
  //   }

  //   // call the function passed from `App`
  //   props.onUpdateStudent(updatedStudent);
  // }

  // console.log(selectedMovie)
  
  return (
    <div>
      {movieList.map(movie => (
        <div className="outer-card">
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