import React from 'react';
import PropTypes from 'prop-types';

const Customer = (props) => {

  // return(
  //   <div className="cards">
  //     <div className="card">
  //       <div>
  //         <td>{props.name}</td>
  //         <td>
  //           <button class="ui olive button" onClick={() => { props.customerCallback(props.id) } }>
  //             Select Customer
  //           </button>
  //         </td>
  //       </div>
  //     </div>
  //   </div>
  // )

  return (
    <div class="">
      <h3 class="ui header"> {props.name} </h3>
        <button class="ui olive button" onClick={() => { props.customerCallback(props.id) } }>
          Select Customer
        </button>
    </div>
  )
};

export default Customer
