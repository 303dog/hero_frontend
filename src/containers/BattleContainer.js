import React, { Component } from "react";
import { connect } from "react-redux";
import TicketStats from "../components/ticketStats";
import { setPoints, setGoodGuy, setEvilGuy, setWinner } from "../actions/actionCreator";
import { Link } from 'react-router-dom';
import './Battle.css';

class BattleContainer extends Component {
        
      
  letsBattle = () => {
    let good = this.props.goodGuy
    let evil = this.props.evilGuy  
    let heroPoints = 0;
    let villainPoints = 0;
    for (let key in evil) {
      if (good[key] > evil[key]) {
        heroPoints++;
      } else {
        villainPoints++;
      }
    } if (heroPoints > villainPoints) {
       this.props.setWinner(good);
    } else {
       this.props.setWinner(evil);                        
    }
  }; 
  

  renderWinner = () => {
    let champ = this.props.winner
    return (
      <div className="champion">
      <div className="oppOne evenboxinnerB">
        <h1>The Victor!!!</h1>
        </div>
        <div className="battle__columns">
        <img className='champPic' src={champ.mdImg} alt="Champion" />
        </div>
        <div className="battle__title">
        <h2> One more win for the <u>{champ.alignment}</u> guys!</h2>
        <div className="battle__titleB boxz"><h2>This makes a career total of {champ.wins} for {champ.name}</h2>
        </div>
        <Link to="/" className='linkButt' > Return</Link>
        <button onClick={() => this.props.setPoints(this.props.winner)} className='point__button'>Points</button>
        </div>
      </div>
    );
  };

    
  renderBattle = () => {
    return (
        <>
          <TicketStats good={this.props.goodGuy} evil={this.props.evilGuy}/>
          {<button class="button" onClick={this.letsBattle}>DING</button>}
        </>
  )
}
  
  render() {
    return (
      <>
        <div className="main-container">
          {this.props.winner ? this.renderWinner() : this.renderBattle()}
        </div>     
        </>
       )
  }
}


const mapStateToProps = (state) => ({
  heros: state.heros,
  goodGuy: state.goodGuy,
  evilGuy: state.evilGuy,
  winner: state.winner,

});

export default connect(mapStateToProps,  {  setWinner, setEvilGuy, setPoints, setGoodGuy })(BattleContainer);
 