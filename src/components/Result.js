

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Store.css';
import FlashMessage from './FlashMessage';

const Result = (props) => {

  const [movies, setMovies] = useState([]);
  // const [flash, setFlash] = useState(null)

  const [error, setError] = useState(undefined)
  const [success, setSuccess] = useState(undefined)
  
  const endPoint = `${props.url}movies?query=`

  const onLoadSearch = (searchTerm) => {
    axios.get(`${endPoint}${searchTerm}`)
      .then((response) => {
        console.log(response.data)
        setMovies(response.data)
      })
      .catch((error) => {
        setMovies([])
        console.log(`Error: ${error}`);
      });
  }

  const onClickCallback = (movie) => {
    axios.post(`${props.url}movies/`, {
      title: movie.title,
      overview: movie.overview,
      release_date: movie.release_date,
      inventory: inventory,
    })
      .then((response) => {
        console.log(response)
        // setFlash(`${movie.title} added`)
        setSuccess(`${movie.title} Successfully Added`)
      })
      .catch((error) => {
        console.log(`Error: ${error.message}`)
        // setFlash(`${movie.title} not added`)
        setError("You can not add the same movie twice")
      })
  }

  useEffect(() => { onLoadSearch(props.match.params.searchTerm); }, []); 

  const [inventory, setInventory] = useState('')

  const onInputChange = (event) => {
    let newInventory = event.target.value;
    setInventory(newInventory);
  };

  const onTimeout = () => {
    console.log("timing out, clearing state");
    // clear success and error messages
    // clear selected customer and movie
    setSuccess(undefined);
    setError(undefined);
  }

  const formatMovies = (movies) => {
    return (
      <ul>
        {error
          ? <FlashMessage
            messageContents={error}
            messageClass="error-message"
            onTimeoutCallback={onTimeout}/>
          : ""}
        {success
          ? <FlashMessage
            messageContents={success}
            messageClass="success-message"
            onTimeoutCallback={onTimeout} />
          : ""}
        {/* <p>{flash}</p> */}
        {movies.map(movie => {
          return (
            <div key={movie.external_id}>
              <div class="card movies-card">
                <h4><b>{movie.title}</b></h4>
                {/* <p>{movie.external_id}</p> */}
                <img src={movie.image_url} alt="Logo" />
                <p> {movie.overview}</p>
                <p>{movie.release_date}</p>

                <label htmlFor="writePost" className="new-card-form__form-label">Select Inventory: </label>
                <input className="new-inventory"
                  name="Submit inventory"
                  placeholder="Wanted inventory"
                  value={inventory}
                  onChange={onInputChange}
                  type="number"
                  min="1"
                />
                <div>
                  <input className="add-library-button" type="button" value="Add to Library" onClick={() => onClickCallback(movie)} />
                </div>
              </div>
            </div>
          );
        }
        )}
      </ul>
    );
  }

  return (
    <main>
      <div className="store">
        {formatMovies(movies)}
      </div>
    </main>
  );
}

export default Result;