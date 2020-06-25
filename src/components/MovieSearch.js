
import SearchedMovie from './SearchedMovie'
import './MovieSearch.css'
import React, { useState } from 'react';
import axios from 'axios';

const MovieSearch = ({url, selectMovie}) => {
  const [searchResults, setSearchResultsList] = useState([])
  const [formFields, setFormFields] = useState({
    title: "",
  })
  const [message, setMessage] = useState(null);


  const onInputChange = (event) => {
    setFormFields({title: event.target.value})
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
 
    if (formFields.title) {     
      axios.get(`${url}/movies/?query=${formFields.title}`)
        .then((response) => {
          const searchResults = response.data;
          setSearchResultsList(searchResults);
        })
        .catch((error) => {
          setMessage(error.message);
        });
    }
  }

  const databaseMovies = () => searchResults.map((movie) => {
    return <SearchedMovie
      key={movie.id}
      { ...movie }
      selectMovie={() => selectMovie(movie)}
      />
  });

  return(
    <div>
    <form onSubmit={onFormSubmit} >
      <div>
        <label>Title: </label>
        <input
          name="title"
          value={formFields.text}
          onChange = {onInputChange}
          type="text"
        />
      </div>
      <div>
        <button>Search</button>
      </div>
    <div>
      <h1>INFORMATION ABOUT MOVIES</h1>
      {searchResults ? databaseMovies() : ""}
    </div>
    </form>
  </div>
  )
}

export default MovieSearch;