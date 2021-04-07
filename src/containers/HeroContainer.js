import React, { Component } from "react";
import { connect } from "react-redux";
import { setHeros, setGoodGuy, setEvilGuy } from "../actions/actionCreator";
import Heros from '../components/heros';
import './HeroCont.css';


class HeroContainer extends Component {
  
  renderPair = () => {
    return this.props.evilGuy
      ? this.props.history.push("/battle")
      : <Heros />
  };

  render() {
    return (
      <div className="hero__container">
      {this.renderPair()}
      </div>
    )}
}

const mapStateToProps = (state) => ({
  heros: state.heros,
  goodGuy: state.goodGuy,
  evilGuy: state.evilGuy,

});

export default connect(mapStateToProps, {  setHeros, setEvilGuy, setGoodGuy })(HeroContainer);
