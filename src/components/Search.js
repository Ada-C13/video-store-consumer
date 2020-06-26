import React, {useState} from 'react';
import axios from "axios";
import SearchMovieCard from './SearchMovieCard';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'


const Search = () => {

  const [query, setQuery] = useState('');
  const [moviesList, setMoviesList] = useState([]);
  const [error, setError] = useState(null);


  const search = (event) => {
    event.preventDefault();

    axios.get('http://localhost:3000/movies', {
    params: {
      query: query
    }
  })
  .then((response) => {
    const data = response.data;
    console.log(`this is response.data ${response.data}`);
    console.log(`this is movies list before: ${moviesList}`);
    let movieCollection = data.map((movie) => {
      return (
        <div className="col-md-4 pb-4">
          <SearchMovieCard
          external_id = {movie.external_id}
          title = {movie.title}
          overview = {movie.overview}
          release_date = {movie.release_date}
          image_url = {movie.image_url}
          key = {movie.external_id}
          />
        </div>
        );
      });
      setMoviesList(movieCollection);  
    })
    .catch((error) => {
      setError(error.response);
    });
  };
  
  return (
  <div class="m-5 pt-5">
    {/* <h1>Add a Movie to Your Rental Database</h1> */}
    <Jumbotron>
      <h1>Movie Search!</h1>
      <p>
      This is the place you can search for a movie to add to your rental database.  Go ahead, I dare you.
      </p>
      <p>
        <Form inline className='form' onClick={search}>
          <label className='label' htmlFor="query"></label>
          <FormControl type="text" placeholder="Enter a movie" className="mr-sm-2" value={query} onChange={ (event) => setQuery(event.target.value) } />
          <Button variant="light" type='submit'>Search</Button>
        </Form>
      </p>
    </Jumbotron>
    
    <hr></hr>
    <div className="row">{moviesList}</div>   
  </div>
    );
  };
  
  export default Search;
  