import React from 'react';
import Movie from "./Movie"

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
    <div className="ui cards">
      <p></p>
      <p></p>
      <ul>
        {movies}
      </ul>
    </div>
  )
}

export default Library;