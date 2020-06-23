import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({movie}) => {
  return (
    <div class="card w-25">
      <img class="card-img-top" src={movie.image_url} alt={movie.title} />
      <div class="card-body">
        <h4 class="card-title"> {movie.title} </h4>
        <p class="card-text"> Released on {movie.release_date} </p>
        <p class="card-text"> {movie.overview} </p>
        <a href="#!" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}
export default Movie;

// const Movie = ({movie}) => {
//   return (
//     <div>
//       <h3> {movie.title} </h3>
//       <img src={movie.image_url} alt={movie.title} />
//       <p> Released on {movie.release_date}</p>
//       <p> {movie.overview}</p>
//     </div>
//   )
// }
// export default Movie;