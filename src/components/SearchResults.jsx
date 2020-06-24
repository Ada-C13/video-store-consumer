import React from "react";
import SearchResult from "./SearchResult";
import PropTypes from "prop-types";

const SearchResults = (props) => {
  let searchResultComponents = [];
  if (props.foundMovies.length > 0) {
    searchResultComponents = props.foundMovies.map((movie) => {
      const found = props.library.find((movieInLibrary) => {
        return movieInLibrary.external_id === movie.external_id;
      });
      const inLibrary = found ? true : false;

      return (
        <SearchResult
          key={movie.external_id}
          external_id={movie.external_id}
          title={movie.title}
          release_date={movie.release_date}
          overview={movie.overview}
          image_url={movie.image_url}
          inLibrary={inLibrary}
          setError={props.setError}
          addMovie={props.addMovie}
        />
      );
    });
  }

  return (
    <table className="ui very basic collapsing celled table">
      <thead>
        <tr className="">
          <th></th>
          <th className="two wide">Title</th>
          <th className="two wide">Release Date</th>
          <th>Overview</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{searchResultComponents}</tbody>
    </table>
  );
};

SearchResults.propTypes = {
  foundMovies: PropTypes.array.isRequired,
  library: PropTypes.array,
  setError: PropTypes.func.isRequired,
  addMovie: PropTypes.func.isRequired,
};

export default SearchResults;
