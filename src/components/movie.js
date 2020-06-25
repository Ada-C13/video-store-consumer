import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';

const Movie = (props) => {
  const { movie, selectMovieCallback } = props;

  const { id, title, overview, releaseDate, imageUrl, externalId } = movie;

  return (
    <div>
      <Row xs="2">
      <Col xs="6" sm="4">
        <Card>
          <CardImg top width="100%" src={imageUrl} alt="Card image cap" />
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardSubtitle>{releaseDate}</CardSubtitle>
            <CardText>{overview}</CardText>
            <Button color="primary" onClick={() => { selectMovieCallback(movie) }}
        >
          Select
        </Button>
        </CardBody>
        </Card>
        </Col>
        </Row>
      </div>
  );
};

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
  selectMovieCallback: PropTypes.func.isRequired
}

export default Movie;