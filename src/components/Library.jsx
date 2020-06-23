import React from 'react';
import Movie from "./Movie"
import "./Library.css"

const Library = (props) => {

  let movies = [];

  if (props.library) {
    movies = props.library.map((movie) => {
      return (
        <Movie 
        title={movie.title} 
        image_url={movie.image_url}
        movieCallback={props.selectMovieCallback}
        id={movie.id}
        key={movie.id} 
      />
      );
    });
  }

  return (
    <div className="movieList">
        {movies}
    </div>
  )
}

export default Library;