import React, { Component } from 'react';

export default class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: '',      
    }
  }

  resetState = () => {
    this.setState({
      searchQuery: '',
    });
  }

  onSubmit = (event) => {
    event.preventDefault();

    const query = this.state.searchTerm

    this.setState({
      searchQuery: '',
    })
    this.props.submitSearchQueryCallback(query);
    this.resetState();
  }

  onFormChange = (event) => {
    const updatedState = {};

    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState(updatedState)
  }

  render() {
    return (
      <section>
        <form onSubmit={this.onSubmit}>
          <input 
            placeholder='Search'
            name='searchQuery'
            onChange={this.onFormChange}
            value={this.state.searchQuery}

          />
          <input
            type='submit'
            value='Search'
            name='submit'
          />
        </form>
      </section>
    );
  }
}

// searchbar from https://callstack.github.io/react-native-paper/searchbar.html