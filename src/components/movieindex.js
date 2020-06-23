import React, { Component } from 'react';
import Movie from './movie';
import axios from 'axios';

class MovieIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieList: [],
      selectedMovie: undefined
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/movies').then((response) => {
      this.setState({
        movieList: response.data
      })
    }).catch(() => {
      this.setState({
        error: 'Error'
      })
    })
  }

  selectMovie = (movieId) => {
    const { movieList } = this.state;

    const selectedMovie = movieList.find((movie) => {
      return movie.id === movieId;
    });

    this.setState({ selectedMovie, });
  }

  render () {
    const { selectedMovie } = this.state;

    const movies = this.state.movieList.map((movie, i) => {
      return <Movie 
        key={i}
        id={movie.id}
        title={movie.title}
        overview={movie.overview}
        releaseDate={movie.release_date}
        imageUrl={movie.image_url}
        externalId={movie.external_id}
        selectMovieCallback={this.selectMovie}

      />
    })
    return (
      <div>
        <h1>{this.state.error}</h1>
        <h1>{selectedMovie ? selectedMovie.title : ''}</h1>
          {movies}
      </div>
    );
  }
}

export default MovieIndex; 