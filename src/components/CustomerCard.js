import React, {useState} from 'react';
import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card'

const CustomerCard = ({id, name, movies_checked_out_count, registered_at, phone, onUpdateSelect, selected_id}) => {

  const onSelect = () => {
    const newSelected = {
      id: id,
      name: name,
    }
    onUpdateSelect(newSelected)
  }

  const selected = () => {
    console.log(selected_id)
    if (id === selected_id) {
      return true
    } else {
      return false
    }
  }

  return (
    <Card>
      <Card.Header>Name: {name}</Card.Header>
      <Card.Body>
        <Card.Title>Customer #{id}</Card.Title>
        <Card.Text>
          Currently, {name} has {movies_checked_out_count} movies checked out.
        </Card.Text>
        <button className="button" onClick={onSelect}> {selected()? 'Selected' : 'Select this Customer'}</button>
      </Card.Body>
      <Card.Footer className="text-muted">Joined on {new Date(registered_at).toString()}</Card.Footer>
    </Card>
    );
  };

CustomerCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  movies_checked_out_count: PropTypes.number,
  registered_at: PropTypes.string,
  phone: PropTypes.string
};

export default CustomerCard;


// this is what Customer looks like
// {
//   "id": 1,
//   "name": "Shelley Rocha",
//   "registered_at": "2015-04-29T14:54:14.000Z",
//   "address": "Ap #292-5216 Ipsum Rd.",
//   "city": "Hillsboro",
//   "state": "OR",
//   "postal_code": "24309",
//   "phone": "(322) 510-8695",
//   "account_credit": 13.15,
//   "movies_checked_out_count": 0
// },