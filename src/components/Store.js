
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Store.css';
import Search from './Search';


const Store = (props) => {

  const [movies, setMovies] = useState([]);
  const endPoint = `${props.url}movies?query=`

  const onSubmitCallback = (searchTerm) => {
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

  
  const onClickCallback = (movie)=> {
    axios.post(`${props.url}movies/`, {
      title: movie.title,
      overview: movie.overview,
      release_date: movie.release_date,
      inventory: inventory,
    })
    .then ((response) => {
      console.log(response)

    })
    .catch((error) => {
      console.log(`Error: ${error}`)
    })
  }

  // By using this Hook, you tell React that your component needs to do something 
  // after render.
  // useEffect takes a function(getMovies) which can contain any kind of operation including side effects
  // Also takes a second argument as an array [], 
  // in this array you can pass variables. When any of this variable updates it will cause the useEffect to run again
  // useEffect(() => { onSubmitCallback(endPoint); }, [endPoint]); 

  const [inventory, setInventory] = useState('')

  const onInputChange = (event) => {
    let newInventory = event.target.value;  
    setInventory(newInventory);
  };

  const formatMovies = (movies) => {
    return (
      <ul>
        {movies.map(movie => {
          return(
            <div key={movie.external_id}>
              <div class="card movies-card">
                  <h4><b>{movie.title}</b></h4>
                  {/* <p>{movie.external_id}</p> */}
                  <img src={movie.image_url} alt="Logo" />
                  <p> {movie.overview}</p>
                  <p>{ movie.release_date }</p>
                  
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
      <div>
        <Search
          onSubmitCallback={onSubmitCallback} 
        />
      </div>
      <div className="store">
        {formatMovies(movies)}
      </div>
    </main>
  );
}

export default Store;