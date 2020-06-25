import React, {useState, useEffect} from 'react';
import axios from "axios";
import MovieCard from './MovieCard';

const Library = ({onUpdateSelectedMovie, selected_id}) => {
  const [error, setError] = useState(null);
  const [libraryList, setLibraryList] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/movies')
      .then((response) => {
        const data = response.data;

        let libraryCollection = data.map((movie) => {
          return (
            <div className="col-md-4 pb-4">
              <MovieCard
              external_id = {movie.external_id}
              id = {movie.external_id}
              title = {movie.title}
              overview = {movie.overview}
              image_url = {movie.image_url}
              key = {movie.external_id}
              onUpdateSelect={onUpdateSelectedMovie} 
              selected_id={selected_id}
              />
            </div>
          );
        });
        
        setLibraryList(libraryCollection);
      })
      .catch((error) => {
        setError(error.response);
      })
  }, []);

    return (
      <div className='row m-5 pt-5'>{libraryList}</div>
    );
};



export default Library;