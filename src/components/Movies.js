import React from 'react';
import PropTypes from 'prop-types';

import './Movies.css';
import Movie from './Movie';

const Movies = (props) => {
  const movieList = props.list.map((movie, i) => {
    return (
      <Movie 
        // image ??? >> in the api there is an image method for 
        // movie but it doesn't seem like it is made available by the api as is
        // lee: image_url is available! we can test this by looking at the endpoint in a browser http://localhost:3000/movies. i added it to the line below and in Movie.js (line 24) because i need it for the checkout page, too
        image_url={movie.image_url}
        title={movie.title} 
        overview={movie.overview} 
        release_date={movie.release_date}
        inventory={movie.inventory}
        onSelectCallback={props.onSelectCallback}
        id={movie.id}
        key={i}
      />
    );
  });
  return (
    <section>
      <h2>Movie Library</h2>
      <section className="movie-list">
        {movieList}
      </section>
    </section>
  );
}

Movies.propTypes = {
  list: PropTypes.array.isRequired,
  onSelectCallback: PropTypes.func.isRequired,
};

export default Movies;