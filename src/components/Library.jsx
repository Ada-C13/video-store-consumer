import React, { useState, useEffect } from 'react';
import Movie from './Movie';

import {
  Link
} from "react-router-dom";

const Library = (props, onClickCallback ) => {
  const [displaySelectedMovie, setMovie] = useState();

  let movies = [];

  if (props.library) {
    movies = props.library.map((movie) => {
      return (
        // <div className="ui card">
        //   <div className="ui content">
        //     <img src={movie.image_url} className="ui medium image" />
        //     <p className="ui header">{movie.title}</p>
        //   </div>
        // </div>
        <Movie 
        title={movie.title} 
        image_url={movie.image_url}
        selectMovieCallback={() => setMovie(movie.id)}
        id={movie.id}
        key={movie.id} 
      />
      
      );
    });
  }

  return (
    <div className="ui cards">
      <p></p>
      <p></p>
      Today's Movie: {displaySelectedMovie}
      <ul>
        {movies}
      </ul>
    </div>
  )
}

export default Library;