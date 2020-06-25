import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';
import { store } from 'react-notifications-component';

const Library = (props) => {
  // const API_MOVIE_URL = "http://localhost:3000/movies"
  const [movieList, setMovieList] = useState([]);
  
  useEffect(()=>{
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
  }, [props.url])

  const movieComponents = movieList.map((movie) => {
    return(
      <Movie
        key = {movie.id}
        id = {movie.id}
        title = {movie.title}
        image_url = {movie.image_url}
        release_date = {movie.release_date}
        overview = {movie.overview}
        external_id = {movie.external_id}
        selectMovieCallback={props.selectMovieCallback}
      />
    )
  })

    return (
      <div className="w-100 d-flex text-center flex-wrap justify-content-around">
        <h2 className="text-center w-100 pt-3 pb-3">Rental Library</h2>
        <table className="table table-hover table-light">
          <thead className="thead-light text-center">
            <tr>
              <th>ID</th>
              <th>Select</th>
              <th>Title</th>
              <th>Image</th>
              <th>Release Date</th>
              <th>Overview</th>
              <th>Ext. ID</th>
            </tr>
          </thead>
          <tbody>
            {movieComponents}
          </tbody>
        </table>
      </div>
  );
}
Library.propTypes = {
  url: PropTypes.string.isRequired
};

export default Library;