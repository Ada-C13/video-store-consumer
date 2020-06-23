import React from 'react';

const AddToLibraryButton = (props) => {
  
  if(props.inLibrary){
    return(<button class="ui disabled button">Already added</button>);
  } else {
    return(<button class="ui olive button">To Library</button>);
  }
};

export default AddToLibraryButton;