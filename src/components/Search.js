import React, { useState } from 'react';


const Search = (props) => {
    
    const [movie, setMovie] = useState('')
  
    const onInputChange = (event) => {
      let newMovie = event.target.value;
      setMovie(newMovie);
    };
  
    const onFormSubmitCallback = (event) => {
      event.preventDefault();
      props.onSubmitCallback(movie);
      setMovie('');
    };
  
    return(
  
      <form className="new-card-form"
          onSubmit={onFormSubmitCallback}>
  
        <div className="search__form">
          <h2 >Search</h2>
          <label htmlFor="writePost" className="search__form-label">Search here: </label>
          <input className="search__form-textarea"
            name="Submit post"
            placeholder="Type Movie here"
            value={movie}
            onChange={onInputChange}
            type="text"
          />
        </div>
        <div className="search__form-button">
          <input type="submit" value="submit card" className="search__form-button"  onSubmit={onFormSubmitCallback}/>
        </div>
      </form>
    );
  };
  
//   Search.propTypes = {
//       onSubmitCallback: PropTypes.func.isRequired,
//     };
  
    export default Search;