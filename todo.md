possible coding challenges:


1.) create a toggle to sort aplhabetically

2.) create a toggle to sort by wins

3.) create a search bar function that allows user to search by "name"

4.)






compareBy(key) {
  const { sortAscending } = this.state;
  return function (a, b) {
    if (a[key] < b[key]) return sortAscending ? -1 : 1;
    if (a[key] > b[key]) return sortAscending ? 1 : -1;
    return 0;
  };
}


  renderHeros = () => {
    if (this.state.asc === false) {
      this.props.heros.map((a, b) => a.wins < b.wins)
    } else {
      this.props.heros.map((a, b) => a.wins > b.wins)
    }
    console.log(this.props.heros)
    //debugger;
    return !this.props.goodGuy ? (
      <GoodHeros
        goodGuys={this.props.heros.filter((hero) => hero.alignment === "good")}
        selectGoodGuy={this.props.setGoodGuy}
        
      />
    ) : (
      <>
        <EvilHeros
          evilGuys={this.props.heros.filter((hero) => hero.alignment === "bad")}
          selectEvilGuy={this.props.setEvilGuy}
        />
      </>
    );
  };