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

          setTimeout(() => {
            setMessage(null);
          }, 5000);
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
      
        setTimeout(() => {
          setMessage(null);
        }, 5000);
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
      axios.post(props.url, addedMovie)
      .then((response) => {
        if (response.status === 200 || response.status === "OK"){
          setMessage("Movie has been successfully added");
          setTimeout(() => {
            setMessage(null);
          }, 5000);
          refreshMovieList();
        }
      })
        .catch((error) => {
          setMessage(error.message);
          console.log(error.message);

          setTimeout(() => {
            setMessage(null);
          }, 5000);
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
      <div className="search-page w-100 d-flex text-center flex-wrap align-content-start justify-content-center">
        

        <div className="search-form w-100"><SearchForm onSubmitCallback ={searchMovie} /></div>

        { movieComponents.length > 0 ? <div>
        <h2 className="py-2 text-center w-100">Search Results</h2>
        <table className="table table-hover table-light">
          <thead className="thead-light text-center">
            <tr>
              <th>Ext. ID</th>
              <th>Add</th>
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
        :
        <h2 className="text-center">No Results</h2>
        }
      </div>
  );
}
  


export default Search;