import React from 'react';
import PropTypes from 'prop-types';

import './Movies.css';
import Movie from './Movie';

const Movies = (props) => {
  const movieList = props.list.map((movie, i) => {
    return (
      <Movie 
        image_url={movie.image_url}
        title={movie.title} 
        overview={movie.overview} 
        release_date={movie.release_date}
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
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      image_url: PropTypes.string.isRequired,
      external_id: PropTypes.number.isRequired,
    })
  ),
  onSelectCallback: PropTypes.func.isRequired,
};

export default Movies;