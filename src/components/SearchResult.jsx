import React from 'react';

const SearchResult = (props) => {
  
  return (
    <tr>
      <td class="ui image header">
        <img src="/images/avatar2/small/lena.png" className="ui mini rounded image"/>
      </td>
      <td> {props.title} </td>
      <td> {props.release_date} </td>
      <td> {props.overview} </td>
    </tr>
  );
};

export default SearchResult;