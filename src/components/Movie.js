import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


import './Movie.css';

const Movie = (props) => {

  const onButtonClick = () => {
    const selected = {
        id: props.id,
        title: props.title
    }
    props.selectMovieCallback(selected);
  }

  // const [addedMovie, setAddedMovie] = useState({
  //       id: "",
  //       title: "",
  //       overview: "",
  //       release_date: "",
  //       inventory: "",
  //       image_url: "",
  //       external_id: ""
  // });
  const onButtonAddClick = () => {
    const clickedMovie = {
        // id: props.id,
        title: props.title,
        overview: props.overview,
        release_date: props.release_date,
        inventory: 10,
        image_url: props.image_url,
        external_id: props.external_id
    }

    // console.log(clickedMovie )
    // setAddedMovie(clickedMovie)
    props.clickAddOnMovie(clickedMovie);
    // console.log(clickedMovie)
  }
  
  return (
    <tr>
      <td>{ props.selectMovieCallback? props.id : props.external_id }</td>
      <td>
        <button onClick={ props.selectMovieCallback ? onButtonClick : onButtonAddClick} className="btn btn-danger">
        { props.selectMovieCallback ? "Select" : "Add" }
        </button>
      </td> 
      <td>{props.title}</td>
      <td><img src={props.image_url} alt={props.title}/></td>
      <td className = "w-25">{props.release_date}</td>
      <td className = "w-75"> {props.overview}</td>
      { props.selectMovieCallback ? <td>{props.external_id}</td> : ""}
    </tr>
  )
}

export default Movie;