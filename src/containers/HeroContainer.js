import React, { Component } from "react";
import { connect } from "react-redux";
import { setHeros, setGoodGuy, setEvilGuy } from "../actions/actionCreator";
import Heros from '../components/heros';
import SortList from '../components/sortByClick';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


class HeroContainer extends Component {
  


  renderPair = () => {
    return this.props.evilGuy
      ? this.props.history.push("/battle")
      : <Heros />
  };

  render() {
    return (
    <>
   
    {this.renderPair()}
    </>
    )}
}

const mapStateToProps = (state) => ({
  heros: state.heros,
  goodGuy: state.goodGuy,
  evilGuy: state.evilGuy,

});

export default connect(mapStateToProps, {  setHeros, setEvilGuy, setGoodGuy })(HeroContainer);
