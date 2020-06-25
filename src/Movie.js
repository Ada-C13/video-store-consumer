import React from 'react';

const Movie = (props) => {

  const onSelectMovie = (event) => {
    // send props.title back to App 
    props.onClickCallback(props.title);
  }

  return (
    <div>
      <h3>{props.title}</h3>
      <img src={props.image_url} alt="movie poster"/>
      <button onClick={onSelectMovie}>Select Movie</button>
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