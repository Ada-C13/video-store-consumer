import React, { useState } from 'react';
import './Search.css';


const Search = (props) => {
    const [movie, setMovie] = useState('')
    const [search, setSearch] = useState(false)
  
    const onInputChange = (event) => {
      let newMovie = event.target.value;
      setMovie(newMovie);
    };
  
    // a preventDefault is called on the event when submitting the form to prevent a browser reload/refresh
    const onFormSubmitCallback = (event) => {
      event.preventDefault(); 
      props.onSubmitCallback(movie);
      setSearch(true)
      setMovie('');
    };
  

    return(
    !search && (
    <div id="cover">  
      <form method="get" action=""
        onSubmit={onFormSubmitCallback}>
        <div className="tb">
          <label htmlFor="writePost" className="td"> </label>
          <input className="search__form-textarea"
            name="Submit post"
            placeholder="Type Movie here"
            value={movie}
            onChange={onInputChange}
            type="text"
          />
        </div>
        <div class="td" id="s-cover">
          <button type="submit">
            <input id="s-circle" onSubmit={onFormSubmitCallback}/>
            <span></span>
          </button>
        </div>
      </form>
    </div>)
    );
  };
  
//   Search.propTypes = {
//       onSubmitCallback: PropTypes.func.isRequired,
//     };
  
  export default Search;