import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './rental.css';

class Rental extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rentals: [], 
      error: '', 
      //  selectedCustomer: props.selectedCustomer,
      // selectedMovie: props.selectedMovie
    };
    console.log(this.props)
  }
  
  //POST: http://localhost:3000/rentals/Alien/check-out?customer_id=10&due_date=2020-12-12
  onClickCheckOut(aMovie, aCustomer_id, aDue_Date) {
    console.log(aDue_Date)
    axios.post('http://localhost:3000/rentals/' + aMovie + '/check-out', {
      customer_id: aCustomer_id, due_date: aDue_Date}).then((response) => {
        console.log(response.data)
        alert("Enjoy your Blockbuster and Chill Time!");
        window.location.href = "/";
    }).catch(() => {
      this.setState({
        error: 'Error'
      })
    })
  }
 

    //runs start of this component
    componentDidMount() {
      // this.onClickCheckOut()
    }


    render() {
      let displayRentalInfo = ''
      if(this.props.selectedMovie && this.props.selectedCustomer){
        displayRentalInfo = this.props.selectedMovie.title + ' - ' + this.props.selectedCustomer.name
      }
      
      return (
        <div className='blah'>
         { displayRentalInfo}
         <button
          className="btn btn-primary select-customer"
          onClick={() => { this.onClickCheckOut(this.props.selectedMovie.title, this.props.selectedCustomer.id, '2020-12-12') }}>
          Confirm
        </button>
        </div>
      );
    }
  
  
  }//class

Rental.propTypes = {
  selectedCustomer: PropTypes.object.isRequired,
  selectedMovie: PropTypes.object.isRequired
};

export default Rental;
