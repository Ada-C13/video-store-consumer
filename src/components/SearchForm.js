import React, { useState } from 'react';
import './SearchForm.css';
import PropTypes from 'prop-types';

const SearchForm = (props) => {

  const [formFields, setFormFields] = useState({
    title: '',
  });

  const onInputChange = (event) => {
    const newFormFields = {
      ...formFields,
    };

    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
  };

  const onFormSubmit = (event) => {
    console.log('onFormSubmit',formFields.title)
    event.preventDefault();
    if (formFields.title !== '') {
      // Send that data back up to App
      props.onSubmitCallback(formFields.title)
      // Clear the fields
      setFormFields({
        title: '',
      })
    }
  };

  const handleChange = (event) => {
    let v =  event.target.value;
    setFormFields({ title: v }); 
  }
  return (
      <div className="wrap">
        <div className="search">
        <form onSubmit={onFormSubmit}>
            <input 
            type="text" 
            className="searchTerm" 
            placeholder="What are you looking for?"
            onChange={handleChange}
            value={formFields.title}/>
            <input type="submit" className="searchButton" />
            </form>
        </div>
      </div>
  );
}

SearchForm.propTypes = {
  onSubmitCallback: PropTypes.func.isRequired,
}

export default SearchForm;