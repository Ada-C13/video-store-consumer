import React from 'react';

const Library = (props) => {

  let movies = [];

  if (props.library) {
    movies = props.library.map((movie) => {
      return (
        <li>{movie.title}</li>
      );
    });
  }

  return (
    <div className="">
      I am library!
      <ul>
        {movies}
      </ul>
    </div>
  )
}

export default Library;