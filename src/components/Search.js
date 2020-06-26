import React, { Component } from 'react';
import axios from 'axios';
import SearchBox from './SearchBox';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foundMovies: [],
    }
  }

  resetState = () => {
    this.setState({
      foundMovies: [],
    });
  }

  selectMovie = (movie) => {
    this.setState({
      selectedMovie: movie,
    });
  }

  searchMovies = (query) => {
    if (query !== null) {
      axios.get('http://localhost:4000/movies/', {
        params: {
          query: query,
        }
      })
      .then((response) => {
        if (response.data !== undefined) {
          this.setState({
            foundMovies: response.data
          });
        };
      })  
      .catch((error) => {
        this.setState({
          error: error.errors,
          foundMovies: [],
        });
      })
    }
  }

  addMovie = (movie) => {
    axios.post('http://localhost:4000/movies', movie)
    .then(() => {
      return (
      <p>Added movie to the rental library.</p>
      )
    })
    .catch((error) => {
      this.setState({
        error: error.message,
        foundMovies: [],
      })
      return (
        <p>There was an error.</p>
      )
    })
  }

  listMovies = () => {
    return(
      this.state.foundMovies.map((movie, i) => {
        return (
          <div className="movie" key={i}>
              <h3>{movie.title}</h3>
              <img src={movie.image_url} alt={movie.title} />
              <p>{movie.overview}</p>
              <button onClick={() => this.addMovie(movie)}>
                Add to Rentals
              </button>
            </div>
        )
      })
    )
  }

  render() {
    return (
      <section>
        <h2>Find Movies to Add to Rental Library</h2>
        <SearchBox 
        submitSearchQueryCallback={this.searchMovies}
        />
        <div>
          {this.listMovies()}
        </div>
      </section>
    )
  }
};


export default Search;