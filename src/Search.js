import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import SearchResult from './SearchResult';

const Search = () => {

  const [searchTerm, setSearchTerm] = useState()
  const [searchResults, setSearchResults] = useState([])
  const [errorMessage, setErrorMessage] = useState(null);
  const [searchResultComponents, setSearchResultComponents] = useState([])
  
  const onInputChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    // get list of search results from API and update state
    const API_SEARCH_URL = `http://localhost:3000/movies`

    axios.get(API_SEARCH_URL, {
      params: {
        query: searchTerm
      }
    })
      .then((response) => { 
        setSearchResults(response.data);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  

    // turn each search result object into a search result component
    
    let searchResultComponents = searchResults.map((resultsObj) => {
      return(< SearchResult 
        id={resultsObj.id}
        title={resultsObj.title} 
        image_url={resultsObj.image_url}
        overview={resultsObj.overview}
        release_date={resultsObj.release_date}
        external_id={resultsObj.external_id}
        inventory={1}
        key={resultsObj.id}
      />);
    });
    setSearchResultComponents(searchResultComponents)
  } 

  return (
    <div className="search">
      <h1>Search Page</h1>

      <p>Enter the movie you're looking for and we'll return every movie we know about that includes those words!</p>
      <form onSubmit={onFormSubmit}>
        <input onChange={onInputChange} value={searchTerm}/>

        <input type="submit" value="Submit"/>
      </form>
      <section className="grid-columns">
      {searchResultComponents}
      </section>

    </div>
  );
}

export default Search;

