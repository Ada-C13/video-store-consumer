import React, { Component } from 'react';
import axios from 'axios';
import './Customer.css';

class Customer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customers: [],
      error: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/customers/')
      .then((response) => {
        this.setState({ customers: response.data });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }
  
  selectCustomer = (customer) => {
    this.setState({
      selectedCustomer: customer,
    });
    this.props.onSelectedCustomerCallback(customer);
  }


listCustomers = () => {
  return(
    this.state.customers.map((customer, i) => {
      return (
        <tr key={i}>
            <td> {customer.name} </td>
            <td> {customer.id} </td>
            <td> {customer.phone}</td>
            <td><button
              type="button"
              onClick={() => { this.selectCustomer(customer) }}
            >Select</button></td>
        </tr>
      )
    })
  )
};

render() {
  return(
    <section>
      <h2>List of All Customers</h2>
      <table border="2" cellSpacing="6" className="customer">
        {this.listCustomers()}
      </table>
    </section>
  )
}


}

export default Customer;