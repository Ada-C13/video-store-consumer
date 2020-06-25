import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Customer from './Customer'
import axios from 'axios';
import './CustomerSearch.css'

class CustomerSearch extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      searchResults: [],
      error: undefined,
      searchDetailsCustomer: undefined
    }
  }

  onInputChange = (event) => {
    this.setState({ name: event.target.value });
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    const { name } = this.state

    if (name) {
      const params = {query: name}      
      axios.get(`${this.props.url}/customers`, { params })
      .then((response) => {
        this.setState({
          searchResults: response.data,
        });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
    }
  }

  showDetails = (customerID) => {
    const { searchDetailsCustomer, searchResults } = this.state;

    if (searchDetailsCustomer && searchDetailsCustomer.external_id === customerID) {
      this.setState({ searchDetailsCustomer: undefined })
    } else {

      const searchDetailsCustomer = searchResults.find((customer) => {
        return customer.external_id === customerID;
      })

      this.setState({ searchDetailsCustomer })
    }
  }

  searchForm = () => {
    return(
    <form onSubmit={this.onSubmitHandler}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            id="name"
            onChange={this.onInputChange}
            value={this.state.name}
          />
        </div>
        <input
          type="submit"
          name="submit"
          onClick={this.onSubmitHandler}
        />
    </form>
    )}

  databaseCustomer = () => this.state.searchResults.map((customer, i) => {
    return <Customer
      key={customer.id}
      { ...customer }
      selectCustomer={(id) => this.props.selectCustomer(id)}
      detailsCallback={() => this.showDetails(customer.external_id) }
      searchDetailsCustomer={this.state.searchDetailsCustomer}
      />
  });

  noResults = () => {
    return <h3>No search results</h3>
  }
  
  render () {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
        <h5>Search for a Customer:</h5>
          <div>
            <input
              text='text'
              onChange={this.onInputChange}
              value={this.state.title}
              name="title"
              id="title"
              className="search-bar"
            />
          </div>
          <div className="submit-padding"><button type="submit" className="">Search</button> 
          </div>
        </form>
        <div>
          {this.state.searchResults.length === 0 ? this.noResults() : this.databaseCustomer()}
        </div>
      </div>
    )
  }
}

CustomerSearch.propTypes = {
  url: PropTypes.string.isRequired,
  selectCustomer: PropTypes.func.isRequired,
}

export default CustomerSearch;