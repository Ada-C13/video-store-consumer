import './MovieLib.css';
import PropTypes from 'prop-types';
import Movie from './Movie'

const MovieLib = ({ movieList, selectMovie }) => {
  const buildMovie = () => {
    const movie = movieList.map((movie) => {
      return <Customer 
        key={movie.id}
        { ...movie }
        selectMovie={(id) => selectMovie(id)}
      />
    });
    return movie;
  }

  return (
    <div>
      <h1>INFORMATION ABOUT MOVIES</h1>
      {buildMovie()}
    </div>
  )
}

export default MovieLib;