import React from "react";

///NOT BEING USED

function Score(props) {
    return (
      <div className="stats">
        {props.winner.wins}
      <h1>Champion    {this.props.winner.name} </h1>
      <img src={this.props.winner.mdImg} alt={"champion"}/>
      <h2>Career Victories: <b>{this.props.winner.wins}</b></h2>
     
      </div>
      
    );
  }
export default Score;