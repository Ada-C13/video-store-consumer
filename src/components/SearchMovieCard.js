import React, {useState} from 'react';
import PropTypes from "prop-types";
import axios from "axios";

const SearchMovieCard = ({title, external_id, overview, release_date, image_url}) => {
  
  const [error, setError] = useState(null);
  // state for inDatabase => default false

  const addMovie = (event) => {
    // POST request
    event.preventDefault();
    axios.post('http://localhost:3000/movies',
      {
        external_id: external_id,
        title: title,
        overview: overview,
        release_date: release_date,
        image_url: image_url
      }
    )
    .then((response) => {
      const data = response.data;
      // console.log(`this is :movie ${:movie}`)
      // let movieCollection = data.map((movie) => {
      //   return (
        
      //     );
      //   });
      //   setMoviesList(movieCollection);  
      })
      .catch((error) => {
        setError(error.response);
      });
  };

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
      <h2>THIS IS A SEARCH MOVIE CARD</h2>
      <button class="btn btn-dark" onClick={addMovie}>Add this movie</button>
    </div>
    )
  };

SearchMovieCard.propTypes = {
  external_id: PropTypes.number,
  title: PropTypes.string,
  overview: PropTypes.string,
  release_date: PropTypes.string,
  image_url: PropTypes.string,
};

// title, overview, release_date, image_url, external_id

export default SearchMovieCard;