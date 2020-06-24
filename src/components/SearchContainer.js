import React, { useState} from 'react';
import axios from 'axios';
import Movie from "./Movie";

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
      />
    )
  })

  return(
    <>
      <form className="" onSubmit={onFormSubmit} >
        <div className ="">
          <label className="">Search for Movie Title: </label>
          <input className = ""
            name="text"
            value={formFields.text}
            onChange = {onInputChange}
            type="text"
          />
        </div>
        <div>
          <input type="submit" value="Find Movie" />
        </div>
      </form>
      <div>
        {movieComponents}
      </div>
    </>
  )
}

export default SearchContainer;