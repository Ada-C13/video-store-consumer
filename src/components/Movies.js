import React from 'react';

const movies = () => {




  return (
    <div>
      <h1>Search for Movies</h1>
        <p>movie search page: allows the user to search for a movie from the external API
        1. ) From the movie search page, I can search for a movie by title from the external API => axios.get(url) and the url should be our localhost.
        2. ) From the movie search results, I can add a movie from the search results to the rental library => axios.post(url, external_id: #,)
        </p>
        <p>
          We should use axios to send requests to the Rails API
        </p>
    </div>
  );
}

export default movies;