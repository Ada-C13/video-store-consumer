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

          setTimeout(() => {
            setMessage(null);
          }, 5000);
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

        setTimeout(() => {
          setMessage(null);
        }, 5000);
      }); 
    }
  
    const addMovie = (addedMovie) => {
        if (checkPresence(addedMovie)){
          setMessage("Rental already exists in library")

          setTimeout(() => {
            setMessage(null);
          }, 5000);
          // console.log ("it is present")
        }else{
          // console.log ("it is NOOOOOOT present")
        axios.post(props.url, addedMovie)
        .then((response) => {
          // const newRental= response.data;
          if (response.status === 200 || response.status === "OK"){
            setMessage("Rental has been successfully added");

            setTimeout(() => {
              setMessage(null);
            }, 5000);
          }  
        })
          .catch((error) => {
            setMessage(error.message);
            console.log(error.message);

            setTimeout(() => {
              setMessage(null);
            }, 5000);
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
      <div className="w-100 d-flex flex-wrap text-center justify-content-around">
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
        <h2 className="py-2 text-center w-100">No Results</h2>
        }
      </div>
  );
}
  


export default Search;