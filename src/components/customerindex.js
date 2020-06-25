import React, { Component } from 'react';
import Customer from './customer';
import axios from 'axios';

class CustomerIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customerList: [],
      selectedCustomer: undefined
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/customers').then((response) => {
      this.setState({
        customerList: response.data
      })
    }).catch(() => {
      this.setState({
        error: 'Error'
      })
    })
  }

  render () {
    const { selectedCustomer } = this.state;

    const customers = this.state.customerList.map((customer, i) => {
      return <Customer
        // customer={customer}
        {...{customer}}
        key={i}
        {...this.props} //spread operator to pass props down
      />
    })
    return (
      <div>
        <h1>{this.state.error}</h1>
        <h1>{selectedCustomer ? selectedCustomer.title : ''}</h1>
          {customers}
      </div>
    );
  }
}

export default CustomerIndex; 