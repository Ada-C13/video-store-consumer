import React, { useEffect, useState, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import PropTypes from 'prop-types';
import Popup from "reactjs-popup";

import './Movie.css';


class Movie extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="movie">
        <div className="movie-image">
          <img src={this.props.image_url} alt="movie cover pic" />
        </div>
        <div className="movie-overview">
          <h3>{this.props.title}</h3>
          {//over view is cut off if it is too long, full avail in details
          }
          <p>{this.props.overview}</p>
        </div>
        <div className="movie-buttons">
          <Popup trigger={<button>Profile</button>} modal>
            <section className="movie-details">
                <h3>{this.props.title}</h3>
                <p>{this.props.overview}</p>
                <p>Released: {this.props.release_date}</p>
                <p>Inventory: {this.props.inventory}</p>
            </section>
          </Popup>
          <button onClick={() => this.props.onSelectCallback(this.props)}>Select</button>
        </div>
      </div>
    );
  } 
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  inventory: PropTypes.number.isRequired,
  onSelectCallback: PropTypes.func.isRequired,
}
export default Movie;