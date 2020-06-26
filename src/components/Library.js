import React, { Component } from 'react';
import axios from 'axios';
import './Library.css';


class Library extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      error: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/movies/')
      .then((response) => {
        this.setState({ movies: response.data });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }

  selectMovie = (movie) => {
    this.setState({
      selectedMovie: movie,
    });
    this.props.onSelectedMovieCallback(movie);
  }

  listMovies = () => {
    return(
      this.state.movies.map((movie, i) => {
        return (
          <div className="movie" key={i}>
              <h3>{movie.title}</h3>
              <img src={movie.image_url} alt={movie.title} />
              <p>{movie.overview}</p>
              <span>
              <button
              type="button"
              onClick={() => { this.selectMovie(movie) }}
            >Select</button>
              </span>
            </div>
        )
      })
    )
}

render() {
  return(
    <section>
      {this.listMovies()}
    </section>
  )
}


}

export default Library;