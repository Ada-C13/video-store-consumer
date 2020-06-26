import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';
import AddMovie from './AddMovie';
import SearchDetail from './SearchDetail';
import './Search.css'
const BASE_URL = 'https://moviestar13.herokuapp.com/movies?query=';
const axios = require('axios');

const Search = (props) => {

  const [searchTerm, setSearchTerm] = useState("");
  const [submission,setSubmission] = useState("");
  const [searchResult, setResult] = useState([]);

  const onInputChange = (event) => {
    let title = [event.target.name] = event.target.value;
    setSearchTerm(title);
  };

  const onSubmit =(event) => {

    event.preventDefault();
    setSubmission(searchTerm);

  };

  useEffect(() => {
    axios.get(BASE_URL + submission)
      .then((response) => {
        setResult(response.data);
      });
  }, [submission]);



  // show search movie details 
  const [searchDetail, setSearchDetail] = useState([]);

  const onClickDetails = (movie) => {
    setSearchDetail(movie);

  }

  const generateSearches = searchResult.map((search)=> {
    return <Movie key={search.id} movie={search} onClickCallBack={onClickDetails}/>
  })

  return <div className="Search">
    <form onSubmit={onSubmit}>
      <input className= "Searchbar" type="text"  onChange={onInputChange} 
       name="title"
            placeholder="Search movie title"
            value={searchTerm}/>
      <div >
          <input type="submit" value="Submit Movie Search" className="MainButton" />
      </div>

    </form>
    {searchResult && (  <h4>Results</h4> )}

    {generateSearches}

    <SearchDetail movie = {searchDetail}/>
    <AddMovie movie ={searchDetail} setDisplayMessage={props.setDisplayMessage}/>
</div>

}

export default Search;


