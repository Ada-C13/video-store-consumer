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

  return (
    <div className="SearchForm">
      <form className="SearchForm-form" onSubmit={onFormSubmit}>

        <div className="SearchForm-inputs">
          <input className="SearchForm-input"
            name="title"
            placeholder="Title"
            type="text"
            onChange={onInputChange}
            value={formFields.title} />
        </div>

        <div className="SearchForm-submit">
          <input type="submit" value="Search" className="select-button" />
        </div>

      </form>
    </div>
  );
}

SearchForm.propTypes = {
  onSubmitCallback: PropTypes.func.isRequired,
}

export default SearchForm;