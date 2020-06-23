import React, {useState} from 'react';
import PropTypes from "prop-types";

const MovieCard = ({title, external_id, overview, release_date, image_url}) => {

  return (
    <div className='card'> 
      {/* <img className='card--image'
      src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster_path}`} alt={title + ' poster'}/>
      <div className='card--content'>
        <h3 className='card--title'>{title}</h3>
        <p><small>RELEASE DATE: {release_date}</small></p>
        <p><small>RATING: {vote_average}</small></p>
        <p className='card--desc'>{overview}</p>
      </div> */}
      <h1>{title}</h1>
      <h2>THIS IS A MOVIE CARD</h2>
    </div>
    )
  };






MovieCard.propTypes = {
  external_id: PropTypes.number,
  title: PropTypes.string,
  overview: PropTypes.string,
  release_date: PropTypes.string,
  image_url: PropTypes.string
};

// title, overview, release_date, image_url, external_id

export default MovieCard;