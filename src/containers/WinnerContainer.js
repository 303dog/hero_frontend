import React, { Component } from "react";
import { connect } from "react-redux";
import { setWinner, setHeros } from "../actions/actionCreator";
import { Link, BrowserRouter as Route } from 'react-router-dom';
import Heros from '../components/heros';

class WinnerContainer extends Component {
        
  renderStats = () => {
    const winner = this.props.winner
   // debugger;
    return (
      <div className="stats">
        <h1>Champion    {winner.name} </h1>
        <img src={winner.mdImg} alt={"champion"}/>
        <h2>Total Career Victories: <b>{winner.wins}</b></h2>
      </div>
    )
  }



  render() {
    return (
      <>
      <div className="stats">
      <Link to="/" render={Heros}> Fight AGAIN</Link>
      </div> 
      {this.renderStats()}
        </>
       )
   }    
  
}


const mapStateToProps = (state) => ({
  winner: state.winner,
  heros: state.heros

});

export default connect(mapStateToProps,  { setHeros, setWinner })(WinnerContainer);