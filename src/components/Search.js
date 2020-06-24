// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Movie from './Movie';

// const Search = (props) => {

//   // Search for movies in the external Movie DB
//   // GET /movies?query=<search term>

//   const URL = `https://api.themoviedb.org/3/search/movie?api_key=${MOVIEDB_KEY}&language=en-US&query=dog&page=1&include_adult=false`
//   const URL = "https://api.themoviedb.org/3/search/movies?query=dog"
//   const [movieList, setMovieList] = useState([]);
//   const [errorMessage, setMessage] = useState(null);
  
//   useEffect(()=>{
//     axios.get(URL)
//       .then((response) => {
//         const searchedMovieList = response.results;
//         setMovieList(searchedMovieList);
//       })
//       .catch((error) => {
//         setMessage(error.message);
//         console.log(errorMessage);
//       });
//   }, [URL])

//   const movieComponents = movieList.map((movie) => {
//     return(
//       <Movie
//         key = {movie.id}
//         id = {movie.id}
//         title = {movie.title}
//         // image_url = {movie.image_url}
//         release_date = {movie.release_date}
//         overview = {movie.overview}
//         // external_id = {movie.external_id}
//         // selectMovieCallback={props.selectMovieCallback}
//       />
//     )
//   })
//   return (
//     <div className="container-fluid">
//       <h2 className="py-2 text-center w-100">All Movies</h2>
//       <table class="table table-hover">
//         <thead class="thead-light">
//           <tr>
//             <th>ID</th>
//             <th>Select</th>
//             <th>Title</th>
//             <th>Image</th>
//             <th>Release Date</th>
//             <th>Overview</th>
//             <th>External_id</th>
//           </tr>
//         </thead>
//         <tbody>
//           {movieComponents}
//         </tbody>
//       </table>
//     </div>
// );
// }


import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Movie from './Movie';
import SearchForm from './SearchForm';

  const Search = (props) => {
    const [searchedmovieList, setSearchedMovieList] = useState([]);
    const [errorMessage, setMessage] = useState(null);
    
    const searchMovie = (search) =>{
      axios.get(`${props.url}/?query=${search.searchTerm}`)
        .then((response) => {
          const movieList = response.data;
          setSearchedMovieList(movieList);
        })
        .catch((error) => {
          setMessage(error.message);
          console.log(errorMessage);
        });
    }

    const movieComponents = searchedmovieList.map((movie) => {
      return(
        <Movie
          key = {movie.id}
          id = {movie.id}
          title = {movie.title}
          image_url = {movie.image_url}
          release_date = {movie.release_date}
          overview = {movie.overview}
          external_id = {movie.external_id}
          // selectMovieCallback={props.selectMovieCallback}
        />
      )
    })
  
    return (
      <div className="container-fluid">
        <SearchForm onSubmitCallback ={searchMovie}/>
        <h2 className="py-2 text-center w-100">All Movies</h2>
        <table className="table table-hover">
          <thead className="thead-light">
            <tr>
              <th>ID</th>
              <th>Select</th>
              <th>Title</th>
              <th>Image</th>
              <th>Release Date</th>
              <th>Overview</th>
              <th>External_id</th>
            </tr>
          </thead>
          <tbody>
            {movieComponents}
          </tbody>
        </table>
        
      </div>
  );
}
  


export default Search;