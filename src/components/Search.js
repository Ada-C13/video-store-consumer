import React, {useState, useEffect} from 'react';
import axios from "axios";
import SearchMovieCard from './SearchMovieCard';


const Search = () => {

  const [query, setQuery] = useState('');
  const [moviesList, setMoviesList] = useState([]);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   axios.get(API_URL_BASE)
  //     .then((response) => {
  //       const apiStudentList = response.data;
  //       setStudentList(apiStudentList);
  //     })
  //     .catch((error) => {
  //       setErrorMessage(error.message);
  //       console.log(error.message);
  //     });
  // }, []);

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
  <div class="m-5">
    <h1>
      {/* {error ? error : null} */}
    </h1>
    <form className='form' onClick={search}>
    <label className='label' htmlFor="query">Movie Name</label>
    <input className='input' type='text' name='query' placeholder='Enter a Movie' value={query} onChange={ (event) => setQuery(event.target.value) }/>
    <button className='button' type='submit'>Search </button>
    </form>
    <hr></hr>
    <div className="row">{moviesList}</div>   
  </div>
    // render some movie cards
    // each card should also have a button to add it to the rental store database
    );
    // Here we will also return some movie cards and that will be great
  };
  
  export default Search;
  