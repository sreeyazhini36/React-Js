import React, { Component } from 'react'

export default class Classcomponent extends Component {
  constructor(){
    super();
    this.state={
      count :0
    }
  }
  incrementCounter = () =>{
    this.setState({count:this.state.count+1})
  };
  decrementCounter = () =>{
    this.setState({count:this.state.count-1})
  };
  render() {
    return (
      <div><h1>Counter :{this.state.count}</h1>
      <button onClick={this.incrementCounter}>increment</button>
      <button onClick={this.decrementCounter}>decrement</button></div>
    )
  }
}









