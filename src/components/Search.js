import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Movie from './Movie';
import SearchForm from './SearchForm';
import PropTypes from 'prop-types';
import { store } from 'react-notifications-component';

  const Search = (props) => {
    const [searchedmovieList, setSearchedMovieList] = useState([]);
    
    const searchMovie = (search) =>{
      axios.get(`${props.url}/?query=${search.searchTerm}`)
        .then((response) => {
          const movieList = response.data;
          setSearchedMovieList(movieList);
        })
        .catch((error) => {
          store.addNotification({
            title: "Error: ",
            message: `${error.message}`,
            type: "danger",
            insert: "top",
            container: "top-left",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true
            }
          });
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
      store.addNotification({
        title: "Error: ",
        message: `${error.message}`,
        type: "danger",
        insert: "top",
        container: "top-left",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      });
      }); 
    }
    
    useEffect(()=>{
      refreshMovieList();
    }, [props.url])

    const checkPresence = (movie) =>{
        const movieTitles = movieList.map(movie =>
          movie.external_id
        );    
        if (movieTitles.includes(movie.external_id)){
          return true
        }else{
          return false
        }    
      }
    
    const addMovie = (addedMovie) => {
      if (checkPresence(addedMovie)) {
        console.log("cannot add movie "+addedMovie.title);
        store.addNotification({
          title: "Error: ",
          message: `${addedMovie.title} already exists in rental library`,
          type: "danger",
          insert: "top",
          container: "top-left",
          animationIn: ["animated", "fadeIn"],
          animationOut: ["animated", "fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true
          }
        });
        return;
      }
      axios.post(props.url, addedMovie)
      .then((response) => {
        if (response.status === 200 || response.status === "OK"){
          store.addNotification({
            title: "Success!",
            message: `"${addedMovie.title}" has been successfully added to library`,
            type: "success",
            insert: "top",
            container: "top-left",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true
            }
          });
        }
      })
        .catch((error) => {
          store.addNotification({
            title: "Error: ",
            message: `${error.message}`,
            type: "danger",
            insert: "top",
            container: "top-left",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true
            }
          });
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
      <div className="full-page w-100 d-flex text-center flex-wrap align-content-start justify-content-center">
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
  
Search.propTypes = {
  url: PropTypes.string.isRequired
};

export default Search;