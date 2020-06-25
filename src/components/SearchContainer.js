import React, { useState} from 'react';
import axios from 'axios';
import Movie from "./Movie";
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_URL_MOVIES = "http://localhost:3000/movies"

const SearchContainer = () => {
  const [formFields, setFormFields] = useState({
    text: ""
  })
  const [movieList, setMovieList] = useState([])
  const [message, setMessage] = useState(null);

  const onInputChange = (event) => {
    const newFormFild = {...formFields}
    newFormFild[event.target.name] = event.target.value
    setFormFields(newFormFild)
  }

  const onFormSubmit = (event) =>{
    event.preventDefault();

    axios.get(API_URL_MOVIES, {
      params: {
        query: formFields.text
      }
    })
    .then((response) => {
      const apiMovieList = response.data;
      console.log(apiMovieList)
      setMovieList(apiMovieList);
    })
    .catch((error) => {
      setMessage(error.message);
      console.log(message);
    });
  }

  const movieComponents = movieList.map((movie) => {
    return(
      <Movie
        key = {movie.external_id}
        externalId = {movie.external_id}
        title = {movie.title}
        overview = {movie.overview}
        releaseDate = {movie.release_date}
        imageUrl = {movie.image_url}
        showAddButton = {true}
        showDetailButton = {false}
        selectMovieButton = {false}
      />
    )
  })

  return(
    <div className="form">
      <Form onSubmit={onFormSubmit} >
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Search for Movie Title: </Form.Label>
          <input className = ""
            name="text"
            value={formFields.text}
            onChange = {onInputChange}
            type="text"
          />
        </Form.Group>
        <div>
          <input type="submit" value="Find Movie" />
        </div>
      </Form>
      <div>
        {movieComponents}
      </div>
    </div>
  )
}

export default SearchContainer;