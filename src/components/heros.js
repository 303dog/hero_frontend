import React, { Component } from "react";
import { connect } from "react-redux";
import { setHeros, setGoodGuy, setEvilGuy } from "../actions/actionCreator";
import GoodHeros from "../components/goodHeros";
import EvilHeros from "../components/evilHeros";
import SortList from "../components/sortByClick";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class Heros extends Component {
  constructor (props){
    super(props)
  this.sortByWins = this.sortByWins.bind(this)
  this.state = {
    ascending: true,
    newSortedList: [],
  }
}

  componentDidMount() {
    this.props.setHeros()    
  }

  
  sortByWins = () => {
    this.setState({
      newSortedList: this.props.heros
    })
    //debugger;
    return (
    this.state.newSortedList.sort((a, b) => (a.wins < b.wins) ? 1 : -1).map(({heros, name}) => (
      console.log(this.state.newSortedList),
      <div>{this.newSortedList}</div>
        ),)
        )      
      }
     
  
 renderHeros = () => {
   return !this.props.goodGuy ? (
     <>
     <button type="button" onClick={() => this.sortByWins()}>SORT by Wins</button>
    <GoodHeros
    goodGuys={this.props.heros.filter((hero) => hero.alignment === "good")}
    selectGoodGuy={this.props.setGoodGuy}
    />
     </>
     ) : (
    <>
    <EvilHeros
      evilGuys={this.props.heros.filter((hero) => hero.alignment === "bad")}
      selectEvilGuy={this.props.setEvilGuy}
    />
     </>
   );
 };



// renderHeros = () => {
//   return !this.props.goodGuy ? (
//     <GoodHeros
//       goodGuys={this.props.heros.filter((hero) => hero.alignment === "good")}
//       selectGoodGuy={this.props.setGoodGuy}
//     />
//   ) : (
//     <>
//       <EvilHeros
//         evilGuys={this.props.heros.filter((hero) => hero.alignment === "bad")}
//         selectEvilGuy={this.props.setEvilGuy}
//       />
//     </>
//   );
// };

render() {  
  return (
    <>
   
    {this.renderHeros()}
    </>
  )
}

}

const mapStateToProps = (state) => ({
  heros: state.heros,
  goodGuy: state.goodGuy,
  evilGuy: state.evilGuy,

});

export default connect(mapStateToProps, { setHeros, setEvilGuy, setGoodGuy })(Heros);



//
//
//handleClick = () => { 
//  {this.sortByWins(this.props.heros)}
// }
//
//
//
// sortByWins = (props) => {
//   let sortedList = props
//   if (this.state.ascending) {
//       sortedList.map((a, b) => a.wins < b.wins)
//       } else {
//       sortedList.map((a, b) => a.wins > b.wins)
//       }
//       this.setState({
//         ascending: !this.state.ascending,
//         sortedList: sortedList
//       }); console.log(props)
//       //debugger;
//}