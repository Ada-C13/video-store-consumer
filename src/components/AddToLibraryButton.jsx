import React from 'react';

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

export default AddToLibraryButton;