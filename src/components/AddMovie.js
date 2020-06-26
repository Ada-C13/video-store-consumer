import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
const BASE_URL = 'https://moviestar13.herokuapp.com/add/';
const axios = require('axios');


const AddMovie= (props) => {

  const [AddedMovie, setAddedMovie] = useState({});

  const onSubmitAdd = (event) => {
    event.preventDefault();
    setAddedMovie(props.movie);
  }

  useEffect(() => {
    if (AddedMovie.title == undefined){
      return ;
    }
    axios.post(BASE_URL , {
        external_id: AddedMovie.external_id,
        title: AddedMovie.title, 
        image_url: AddedMovie.image_url, 
        overview:AddedMovie.overview, 
        release_date: AddedMovie.release_date,
    })

      .then((response) => {
        props.setDisplayMessage({message:"Successfully Added Movie " + AddedMovie.title , severity: "success"});
        console.log("Successfully Added Movie: " + AddedMovie.title);
        console.log(response.data);
      })
      .catch((error)=>{
        props.setDisplayMessage({message:"Failed to add movie " + AddedMovie.title , severity: "error"});
        console.log(error.response.data.errors);
        console.log("FAILED to add new movie to library!")
      });
      ;

  }, [AddedMovie]);


  return <button onClick = {onSubmitAdd} className ="MainButton" id="Hotpink" >
    Add Movie to Library
  </button>
  
  


} ;

export default AddMovie