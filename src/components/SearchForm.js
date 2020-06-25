import React, { useState} from 'react';
import PropTypes from 'prop-types';

const SearchForm = (props) => {
  const [formFields, setFormFields] = useState({
    searchTerm: "",
  })

  const onInputChange = (event) => {
    setFormFields({searchTerm: event.target.value})
  }

  const onFormSubmit = (event) =>{
    event.preventDefault()

    props.onSubmitCallback(formFields)
    setFormFields({
      searchTerm: "",
    })
  }

  return(
    <div className="pt-3 container">
      <form onSubmit={onFormSubmit}
        className="new-student-form input-group"
        onSubmit={onFormSubmit}
        data-testid="SearchForm--form"
      >
        {/* <div className="float-left"> */}
          <label className="sr-only" placeholder="Search movie database by title">Search movie database by title: </label>
          <input
            className="form-control"
            name="text"
            value={formFields.text}
            onChange = {onInputChange}
            type="text"
          />
          <div className="input-group-append">
            <button
              className="form-control btn btn-danger mb-2"
              type="submit"
              value="Search"
            >Search</button>
          </div>
    </form>
  </div>
  )
} 

SearchForm.propTypes = {
  onSubmitCallback: PropTypes.func.isRequired,
};

export default SearchForm;