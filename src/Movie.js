import React from 'react';

const Movie = (props) => {

  return (
    <div>
      <h3>{props.title}</h3>
      <img src={props.image_url} alt="movie poster"/>
    </div>
  )
}
//TODO - Movie? 
// Movie.propTypes = {
//   id: PropTypes.number,
//   title: PropTypes.string,
//   image_url: PropTypes.string
// };

export default Movie;