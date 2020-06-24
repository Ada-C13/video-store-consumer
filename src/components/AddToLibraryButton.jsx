import React from 'react';
import PropTypes from 'prop-types';

const AddToLibraryButton = (props) => {

  const addToLibrary = (event) => {
    event.preventDefault();
    props.addToLibraryCallback();
  };

  if(props.inLibrary){
    return(<button class="ui disabled button">Added</button>);
  } else {
    return(<button class="ui olive button" onClick={addToLibrary}>To Library</button>);
  }
};

AddToLibraryButton.propTypes = {
  inLibrary: PropTypes.bool.isRequired,
  addToLibrary: PropTypes.func.isRequired
};

export default AddToLibraryButton;

