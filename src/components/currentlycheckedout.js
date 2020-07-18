import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './currentlycheckedout.css';

class CurrentlyCheckedOut extends Component {
  constructor(props) {
    super(props);
    this.state = {rentals: [], error: ''};
  }

  getCurrentlyCheckedOut() {
    axios.get('http://localhost:3000/rentals/currentlycheckedout').then((response) => {
        this.setState({
          rentals: response.data
        })
        console.log(this.state.rentals)
      }).catch(() => {
        this.setState({
          error: 'Error'
        })
      })
    }
    
  //runs start of this component
  componentDidMount() {
    this.getCurrentlyCheckedOut()
  }

  //POST: /rentals/Psycho/return
  // for this route thing: https://kapeli.com/cheat_sheets/Axios.docset/Contents/Resources/Documents/index
  onClickCheckIn(aTitle, aCustomer_id) {
    axios.post('http://localhost:3000/rentals/' + aTitle + '/return', {
      customer_id: aCustomer_id, 
    }).then((response) => {
     this.getCurrentlyCheckedOut()
    }).catch(() => {
      this.setState({
        error: 'Error'
      })
    })
  }

  render() {
    this.items = this.state.rentals.map((item, key) =>
    <li key={key}>
      {item.name} - {item.title} - {item.due_date} - {item.returned.toString()}

      <button
          className="btn btn-primary select-customer"
          onClick={() => { this.onClickCheckIn(item.title, item.customer_id) }}>
          Returned
        </button>
    
    </li>
);

    return (
      
      <div className="CurrentlyCheckedOut">
        <ul>
          {this.items}
        </ul>
      </div>
    );
  }


}//class

CurrentlyCheckedOut.propTypes = {

};

export default CurrentlyCheckedOut;