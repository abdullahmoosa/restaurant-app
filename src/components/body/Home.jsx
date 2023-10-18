import React, { Component } from 'react'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  console.log("mapStateToProps", state);
  return {
    dishes : state.dishes
  }
}
export class Home extends Component {
  componentDidMount(){
    console.log("State : ", this.state);
    console.log("Props : ", this.props);
  }

  render() {
    document.title = 'Bohubrihi Restaurant'
    return (
      <div>Home</div>
    )
  }
}

export default connect(mapStateToProps)(Home);