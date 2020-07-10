import React from'react';
import PropTypes from 'prop-types';
import Movie from './Movie';

const MovieLibrary = ({ movieList, selectMovie }) => {
  const allMovies = movieList.map((movie) => {
		return (
			<div  key={movie.id} className="single-movie align-self-center">
				<Movie movie={movie} selectMovie={selectMovie} action={"Select Movie"} key={movie.id}/>
			</div>
		);
	});

  return (
    <div className="container d-flex flex-column align-items-center">
      <div className="d-flex flex-row justify-content-center align-items-center">
        <img className="popcorn-header w-25" src="https://images.unsplash.com/photo-1587132129911-80e544e7e7b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1006&q=80" alt="popcorn as icon" />
        <h3>. . . Movie Library</h3>
      </div>

      <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
        { allMovies }
      </div>
    </div>
  )
}

MovieLibrary.propTypes = {
  movieList: PropTypes.array.isRequired,
  selectMovie: PropTypes.func.isRequired,
};

export default MovieLibrary;