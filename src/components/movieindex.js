import React, { Component } from 'react';
import Movie from './movie';
import axios from 'axios';
class MovieIndex extends Component {
    constructor(props) {
        super(props);

        this.state = {value: Movie.title, movieList: []};
        // https://reactjs.org/docs/forms.html
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleChange(event) {
        this.setState({value: event.target.value});
        console.log(this.state.value)
      }
    
      handleSubmit(event) {
        // alert('A search was submitted: ' + this.state.value);
        event.preventDefault();
        //call API
        axios.get('http://localhost:3000/movies?query='+ this.state.value).then((response) => {
          this.setState({
            movieList: response.data
          })
          console.log(this.state.movieList)
        }).catch(() => {
          this.setState({
            error: 'Error'
          })
        })
      }
    render() {
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