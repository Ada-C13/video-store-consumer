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
      props.onSubmitCallback(formFields)
      // Clear the fields
      setFormFields({
        title: '',
      })
    }
  };

  return (
    <div className="SearchForm">
      <form className="SearchForm__form" onSubmit={onFormSubmit}>

        <div className="SearchForm__inputs">
          <input
            name="title"
            placeholder="Title"
            type="text"
            onChange={onInputChange}
            value={formFields.title} />
        </div>

        <div className="SearchForm__submit">
          <input type="submit" value="Submit Line" className="SearchForm__submit-btn" />
        </div>

      </form>
    </div>
  );
}

SearchForm.propTypes = {
  onSubmitCallback: PropTypes.func.isRequired,
}

export default SearchForm;