import React, { useEffect, useState } from'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './MovieSearch.css';

/*class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}
// // class MovieSearch extends Component {
// //   constracutor (props){
// //     super(props);

// //     this.cleared = {
//           title: "",
              
}
//   }
// }*/

const MovieSearch = (props) => {

  const [ searchBar, setSearchBar ] = useState('');
  
  const onInputChange = (event) => {
		const newSearch = { ...searchBar };
		newSearch = event.target.value;
    setSearchBar(newSearch);
  };

  const onSearchSubmit = (event) => {
    event.preventDefault();
    // TODO: create a callback function as props
		props.searchMovieCallBack(searchBar);
		setSearchBar('');
	};
  
  return (
    <div>
      <h3>Movie Search</h3>
      <input
        type='type'
        name='title'
        className='searchbox'
        onChange={onInputChange}
       />
    </div>
  )
}

export default MovieSearch;