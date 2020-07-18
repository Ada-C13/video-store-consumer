import React, { Component } from 'react';
import Customer from './customer';
import axios from 'axios';
import {
  Row, Col, Container
} from 'reactstrap';

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
      return <Col xs="6" sm="4"><Customer
        // customer={customer}
        {...{customer}}
        key={i}
        {...this.props} //spread operator to pass props down
      />
      </Col>
    })
    return (
      <div>
        <h1>{this.state.error}</h1>
        <h1>{selectedCustomer ? selectedCustomer.title : ''}</h1>
        <div>
          <Container>
          <Row xs="2">
          {customers}
          </Row>
          </Container>
          </div>
          </div>
    );
  }
}

export default CustomerIndex; 