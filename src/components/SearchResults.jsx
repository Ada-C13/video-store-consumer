import React from 'react';
import SearchResult from './SearchResult';

const SearchResults = (props) => {
  let searchResultComponents = [];
  if (props.foundMovies.length > 0) {
    searchResultComponents = props.foundMovies.map((movie) => {
      return (
        <SearchResult
          key={movie.id}
          id={movie.id}
          title={movie.title}
          release_date={movie.release_date}
          overview={movie.overview}
          image_url={movie.image_url}
        />
      );
    });
  }


  return (
    <table class="ui very basic collapsing celled table">
      <thead>
        <tr>
          <th></th>
          <th>Title</th>
          <th>Release Date</th>
          <th>Overview</th>
        </tr>
      </thead>
      <tbody>
        {searchResultComponents}
      </tbody>
    </table>
  );
};

export default SearchResults;