import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Movie from './Movie';
import SearchForm from './SearchForm';

  const Search = (props) => {
    const [searchedmovieList, setSearchedMovieList] = useState([]);
    const [errorMessage, setMessage] = useState(null);
    
    const searchMovie = (search) =>{
      axios.get(`${props.url}/?query=${search.searchTerm}`)
        .then((response) => {
          const movieList = response.data;
          setSearchedMovieList(movieList);
        })
        .catch((error) => {
          setMessage(error.message);
          console.log(errorMessage);
        });
    }

  const checkPresence = (movie) =>{
    axios.get(props.url)
      .then((response) => {
        const movieList = response.data
        const movie_titles = movieList.map(movie =>
          movie.title
        );
        let result;
        if (movie_titles.includes(movie.title)){
          result = true;
        }else{
          result = false;
        }
        return result;
      })
      
      .catch((error) => {
        setMessage(error.message);
        console.log(errorMessage);
      }); 
    }
  
    const addMovie = (addedMovie) => {
        if (checkPresence(addedMovie)){
          console.log ("it is present")
        }else{
          console.log ("it is NOOOOOOT present")
        axios.post(props.url, addedMovie)
        .then((response) => {
          // const newRental= response.data;
          if (response.status === 200 || response.status === "OK"){
            setMessage("Rental is successfully added")
          }  
        })
          .catch((error) => {
            setMessage(error.message);
            console.log(error.message);
          });
          console.log(addedMovie)
          
        }
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
      <div className="container-fluid">
        <SearchForm onSubmitCallback ={searchMovie}/>
        <h2 className="py-2 text-center w-100">All Movies</h2>
        <table className="table table-hover">
          <thead className="thead-light">
            <tr>
              <th>ID</th>
              <th>Select</th>
              <th>Title</th>
              <th>Image</th>
              <th>Release Date</th>
              <th>Overview</th>
              <th>External_id</th>
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