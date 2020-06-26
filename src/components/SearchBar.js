import React, { useState, useEffect } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import PropTypes from "prop-types";

const SearchBar = ({ submitSearchTermCallback }) => {
  const [searchWord, setSearchWord] = useState("");

  const resetState = () => {
    setSearchWord("");
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const query = searchWord;

    submitSearchTermCallback(query);
    resetState();
  };

  const onFormChange = (event) => {
    const value = event.target.value;
    setSearchWord(value);
  };

  return (
    <Form onSubmit={onSubmit} inline>
      <FormControl
        onChange={onFormChange}
        value={searchWord}
        name="searchWord"
        type="text"
        placeholder="Search"
        className="mr-sm-2"
      />

      <Button className="customer-button" variant="primary" type="submit">
        {" "}
        Search
      </Button>
    </Form>
  );
};

SearchBar.propTypes = {
  submitSearchTermCallback: PropTypes.string.isRequired,
};
export default SearchBar;
