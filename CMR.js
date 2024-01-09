import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super();
    console.log("constructor");
    this.state = {
      count:0,
    };
  }
  componentDidMount(){
    console.log("Mounting");
    setInterval(() => {
      this.setState({count:this.state.count+1});
    }, 1000);
  }
  render() {
    console.log("Rendering");
    return (
      <>
      <h1>count:{this.state.count}</h1>
        
      </>
    )
  }
}
