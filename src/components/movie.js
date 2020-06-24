import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';

const Movie = (props) => {
  const { id, title, overview, releaseDate, imageUrl, externalId, selectMovieCallback } = props;

  return (
    // <div className="card movie-card">
    //     {id} - {title} - {releaseDate}
    //     <Button color="primary" onClick={() => { selectMovieCallback(id) }}>Select</Button>
    //     {/* <button
    //       className="btn btn-primary select-movie"
    //       onClick={() => { selectMovieCallback(id) }}
    //     >
    //       Select
    //     </button> */}
    //     {imageUrl}
    //     <p>{overview}</p>
    //     {externalId}

    // </div>
        <div>
           <Row xs="2">
      <Col xs="6" sm="4">
        <Card>
          <CardImg top width="100%" src={imageUrl} alt="Card image cap" />
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardSubtitle>{releaseDate}</CardSubtitle>
            <CardText>{overview}</CardText>
            <Button color="primary" onClick={() => { selectMovieCallback(id) }}>Select</Button>
          </CardBody>
        </Card>
        </Col>
        </Row>
      </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  overview: PropTypes.string,
  imageUrl: PropTypes.string,
  externalId: PropTypes.number,
  selectMovieCallback: PropTypes.func
}

export default Movie;