import React from "react";
import PropTypes from "prop-types";
import "./Customer.css";

const Customer = (props) => {
  // return(
  //   <div className="cards">
  //     <div className="card">
  //       <div>
  //         <td>{props.name}</td>
  //         <td>
  //           <button class="ui blue button" onClick={() => { props.customerCallback(props.id) } }>
  //             Select Customer
  //           </button>
  //         </td>
  //       </div>
  //     </div>
  //   </div>
  // )

  return (
    <div className="user_grid">
      <h3 class="ui header"> {props.name} </h3>
      <button
        class="ui blue button"
        onClick={() => {
          props.customerCallback(props.id);
        }}
      >
        Select Customer
      </button>
    </div>
  );
};

Customer.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  customerCallback: PropTypes.func.isRequired,
};

export default Customer;
