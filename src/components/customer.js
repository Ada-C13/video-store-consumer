import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';

const Customer = (props) => {
  const { customer, selectCustomerCallback } = props;

  const { id, name, registered_at, address, city, state, postal_code, phone, account_credit } = customer;

  const someCustomer = () => { 
    selectCustomerCallback(customer)
    console.log(customer)
  }

  return (

<div>
<Row xs="2">
<Col xs="6" sm="4">
<Card>
<CardBody>
 <CardTitle>{id}</CardTitle>
 <CardSubtitle>{name}</CardSubtitle>
 <CardText>{phone}</CardText>
 <Button color="primary"
          onClick={someCustomer}>Select</Button>
          {name}
        <p>{phone}</p>
        {account_credit}
</CardBody>
</Card>
</Col>
</Row>
</div>
  );
};

Customer.propTypes = {
  customer: PropTypes.object.isRequired,
  selectCustomerCallback: PropTypes.func.isRequired
}

export default Customer;