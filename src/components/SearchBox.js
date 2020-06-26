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

  onFormChange = (event) => {
    const updatedState = {};

    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState(updatedState)
  }

  onSubmit = (event) => {
    event.preventDefault();

    const query = this.state.searchQuery
    console.log(query)
    this.setState({
      searchQuery: '',
    })
    this.props.submitSearchQueryCallback(query);
    this.resetState();
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