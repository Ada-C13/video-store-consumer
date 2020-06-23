import React from 'react';

const SearchResult = (props) => {


  
  return (
    <tr>
      <td>
        <img src={props.image_url} className="ui mini rounded image"/>
      </td>
      <td> {props.title} </td>
      <td> {props.release_date} </td>
      <td> {props.overview} </td>
    </tr>
  );
};

export default SearchResult;