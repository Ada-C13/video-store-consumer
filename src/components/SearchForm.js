import React, { useState} from 'react';
import PropTypes from 'prop-types';


const SearchForm = (props) => {
  const [formFields, setFormFields] = useState({
    searchTerm: "",
  })

  const onInputChange = (event) => {
    // const newFormField = {...formFields}
    // newFormField[event.target.name] = event.target.value
    setFormFields({searchTerm: event.target.value})

    // console.log(newFormField)
  }

  const onFormSubmit = (event) =>{
    event.preventDefault()

    props.onSubmitCallback(formFields)
    setFormFields({
      searchTerm: "",
    })
  }

  return(
    <form onSubmit={onFormSubmit}
      className="new-student-form"
      onSubmit={onFormSubmit}
      data-testid="SearchForm--form"
    >
      <div>
        <label>Search movies by title:</label>
        <input
          name="text"
          value={formFields.text}
          onChange = {onInputChange}
          type="text"
        />
      </div>
      <input
        type="submit"
        value="Search"
      />
  </form>
  )
} 

// SearchForm.propTypes = {
//   onSubmitCallback: PropTypes.func.isRequired,
// };

export default SearchForm;