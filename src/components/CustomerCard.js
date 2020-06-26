import React from 'react';
import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card'

const CustomerCard = ({id, name, movies_checked_out_count, registered_at, onUpdateSelect}) => {

  const onSelect = () => {
    const newSelected = {
      id: id,
      name: name,
    }
    onUpdateSelect(newSelected)
  }

  return (
    <Card>
      <Card.Header>Name: {name}</Card.Header>
      <Card.Body>
        <Card.Title>Customer #{id}</Card.Title>
        <Card.Text>
          Currently, {name} has {movies_checked_out_count} movies checked out.
        </Card.Text>
        <button className="button" onClick={onSelect}>Select this Customer</button>
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
  onUpdateSelect: PropTypes.func,
};

export default CustomerCard;
