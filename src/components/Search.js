import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Movie from './Movie';
import SearchForm from './SearchForm';

  const Search = (props) => {
    const [searchedmovieList, setSearchedMovieList] = useState([]);
    const [message, setMessage] = useState("");
    
    const searchMovie = (search) =>{
      axios.get(`${props.url}/?query=${search.searchTerm}`)
        .then((response) => {
          const movieList = response.data;
          setSearchedMovieList(movieList);
        })
        .catch((error) => {
          setMessage(error.message);
          console.log(message);
        });
    }

  const [movieList, setMovieList] = useState([]);
  
  
  const refreshMovieList = () =>{
    axios.get(props.url)
    .then((response) => {
      const movieList = response.data;
      setMovieList(movieList);
    })
    .catch((error) => {
      setMessage(error.message);
      console.log(message);
    });
  }
  useEffect(()=>{
    refreshMovieList();
  }, [props.url])

    const checkPresence = (movie) =>{
      const movieTitles = movieList.map(movie =>
        movie.title
      );    
      // console.log(movie.title)
      // console.log(movieTitles)
      if (movieTitles.includes(movie.title)){
        return true
      }else{
        return false
      }    
    }
  
    const addMovie = (addedMovie) => {
        if (checkPresence(addedMovie)) return
      
        console.log ("XXXXXXX")
        axios.post(props.url, addedMovie)
        .then((response) => {
          // const newRental= response.data;
          if (response.status === 200 || response.status === "OK"){
            console.log("The movie is successfully added")
            refreshMovieList();
          }  
        })
          .catch((error) => {
            setMessage(error.message);
            console.log(error.message);
          });
        }
      
    const movieComponents = searchedmovieList.map((movie) => {
      return(
        <Movie
          key = {movie.external_id}
          // id = {movie}
          title = {movie.title}
          image_url = {movie.image_url}
          release_date = {movie.release_date}
          overview = {movie.overview}
          external_id = {movie.external_id}
          clickAddOnMovie={addMovie}
        />
      )
    })
  
    return (
      <div className="w-100 d-flex flex-wrap text-center justify-content-around">
        <div className="search-form w-100"><SearchForm onSubmitCallback ={searchMovie} /></div>
        <h2 className="py-2 text-center w-100">Search Results</h2>
        <table className="table table-hover">
          <thead className="thead-light text-center">
            <tr>
              <th>Ext. ID</th>
              <th>Select</th>
              <th>Title</th>
              <th>Image</th>
              <th>Release Date</th>
              <th>Overview</th>
            </tr>
          </thead>
          <tbody>
            {movieComponents}
          </tbody>
        </table>
        
      </div>
  );
}
  


export default Search;