import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap/';
import './Movie.css';

const Movie = ({ title, release_date, overview, image_url, id, selectMovie, detailsMovie, external_id, searchDetailsMovie, detailsCallback, inLibrary }) => {

  const isDetailed = (detailsMovie && (detailsMovie.external_id === external_id)) || ((searchDetailsMovie && (searchDetailsMovie.external_id === external_id)));

  const fakeReviews = () => {
    const fakeDescriptions = ['Best movie since ','Made me want to watch ','Can compare to the masterpiece']
    
    const fakeMovies = ['Inception','Jaws','Star Wars','Harry Potter']
    
    return (
      <div>
        <div>"{fakeDescriptions[Math.floor(Math.random() * fakeDescriptions.length)]} {fakeMovies[Math.floor(Math.random() * fakeMovies.length)]}."</div>
        <div>-An Unbiased Reviewer</div>
      </div>
      );
  }

  return (
    <Card>
      <div onClick={ () => detailsCallback(id) }>

        <div>
          <img src={image_url}/>
          <div>
            {title} ({release_date})
            <p>{isDetailed ? overview : ""}</p>
            <div>{isDetailed ? fakeReviews() : ""}</div>
          </div>
          
  

          <div>
            <Button 
              onClick={() => selectMovie(id)}>{inLibrary ? "Select" : "Add to Rental Library"}
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  image_url: PropTypes.string,
  id: PropTypes.number,
  selectMovie: PropTypes.func,
  detailsMovie: PropTypes.object,
  external_id: PropTypes.number,
  searchDetailsMovie: PropTypes.func,
  detailsCallback: PropTypes.func, 
  inLibrary: PropTypes.string,
}

export default Movie;