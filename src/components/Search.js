import React, { useState } from 'react';
import axios from 'axios';

import { store } from 'react-notifications-component';

const Search = () => {

  const notificationMessage = () => {
    store.addNotification({
      title: "Success!",
      message: "Selected movie has been added to your library",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 2000,
      }

    });
  }

  const errorNotificationMessage = () => {
    store.addNotification({
      title: "Warning!",
      message: "Selected movie was already added to your library",
      type: "warning",
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 2000,
      }

    });
  }

  const [searchFieldQuery, setSearchFieldQuery] = useState("");

  const [result, setResult] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (searchFieldQuery !== "" && searchFieldQuery !== undefined && searchFieldQuery !== null) {
      await axios.get(`http://localhost:4000/movies?query=${searchFieldQuery}`)
        .then((response) => {
          setResult(response.data);
        })
        .catch(() => {
          // THIS WAS TRIGGERING WHEN STYLE TAG IN MOVIE CARD WASNT RIGHT??
          alert("Requested movie was not found")
        })
    }
  }

  const addMovie = (movieData) => {
    axios.post('http://localhost:4000/movies', movieData)
      .then((response) => {
        console.log("response is: ", response);
        notificationMessage();
      })
      .catch((error) => {
        console.log("error is: ", error);
        errorNotificationMessage();
        // alert("Requested movie was not added to library")
      })
  }

  return (
    <div>
      <input
        className="search-input"
        placeholder="Enter a movie title"
        name="search"
        onChange={(e) => setSearchFieldQuery(e.target.value)}
        value={searchFieldQuery}
      />

      <button
        className="search-button"
        onClick={handleSearch}
      >
        Search
      </button>

      <div className="movie-cards-container">
        {result.map(movieData =>
          <div>
            <div class="card promoting-card card-style">
              <div class="card-body d-flex flex-row">
                <div>
                  <div class="view overlay">
                    <img src={movieData.image_url} class="movie-img" alt="movie cover image"></img>
                  </div>
                  <h4 class="card-title font-weight-bold mb-2">{movieData.title}</h4>
                  <p class="card-text">Release: {movieData.release_date}</p>
                </div>
              </div>
              <button className="add-btn" onClick={() => addMovie(movieData)}>Add to Library</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
