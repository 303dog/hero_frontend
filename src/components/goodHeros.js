import React from "react";
import sortByWins from '../components/heros';



function GoodHeros(props) {
  return (
    <div className="box">
      <h1>Heros</h1>
      <p>Choose your Hero!</p>
      {props.goodGuys.map((goodGuy) => {
        return (
          <>
          <div className="hero">
            <p>{goodGuy.name}</p>
            <img src={goodGuy.smImg} alt="googuy"/><h3>Career Wins: {goodGuy.wins}</h3>
            <button onClick={() => props.selectGoodGuy(goodGuy)}>select</button>
          </div>
          </>
        );
      })}
    </div>
); 
}
export default GoodHeros;