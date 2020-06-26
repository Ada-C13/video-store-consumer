import React from "react";
import PropTypes from "prop-types";

const AddToLibraryButton = (props) => {
  const addToLibrary = (event) => {
    event.preventDefault();
    props.addToLibraryCallback();
  };

  if (props.inLibrary) {
    return <button className="ui disabled button">Added</button>;
  } else {
    return (
      <button className="ui blue button" onClick={addToLibrary}>
        To Library
      </button>
    );
  }
};

AddToLibraryButton.propTypes = {
  inLibrary: PropTypes.bool.isRequired,
  addToLibraryCallback: PropTypes.func.isRequired,
};

export default AddToLibraryButton;
