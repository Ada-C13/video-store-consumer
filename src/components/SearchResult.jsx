import React, { useState } from 'react';
import axios from 'axios';
import AddToLibraryButton from './AddToLibraryButton';

const POST_URL = "http://localhost:3000/movies"

const SearchResult = (props) => {
  const [inLibrary, setInLibrary] = useState(props.inLibrary);

  const addToLibrary = () => {
    const data = {
      title: props.title,
      overview: props.overview,
      release_date: props.release_date,
      image_url: props.image_url,
      external_id: props.external_id
    };

    console.log(data);
    axios.post(POST_URL, data)
      .then((response) => {
        console.log("Added to Library");
        setInLibrary(true);
        // setErrorMessage('');
      })
      .catch((error) => {
        // What should we do when we know the post request failed?
        // setErrorMessage(error.message);
      });
  }

  return (
    <tr>
      <td>
        <img src={props.image_url} className="ui mini rounded image"/>
      </td>
      <td className="two wide"> {props.title} </td>
      <td className="two wide"> {props.release_date} </td>
      <td> {props.overview} </td>
      <td><AddToLibraryButton inLibrary={inLibrary} addToLibraryCallback={addToLibrary}/></td>
    </tr>
  );
};

export default SearchResult;