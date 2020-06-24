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

  selectCustomer = (customerId) => {
    const { customerList } = this.state;

    const selectedCustomer = customerList.find((customer) => {
      return customer.id === customerId;
    });

    this.setState({ selectedCustomer, });
  }

  render () {
    const { selectedCustomer } = this.state;

    const customers = this.state.customerList.map((customer, i) => {
      return <Customer 
        key={i}
        id={customer.id}
        name={customer.name}
        registered_at={customer.registered_at}
        address={customer.address}
        city={customer.city}
        state={customer.state}
        postal_code={customer.postal_code}
        phone={customer.phone}
        account_credit={customer.account_credit}
        selectCustomerCallback={this.selectCustomer}
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