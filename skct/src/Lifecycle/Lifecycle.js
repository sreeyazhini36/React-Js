import React, { Component } from 'react'

export default class Lifecycle extends Component {
    componentDidMount(){
console.log("componentdidmount========>>>>>>>>>>>>>")
//alert("Welcome student!!!")
    }
    componentDidUpdate(){
console.log("componentdidupdate=========>>>>>>>>>>>>")
alert("updated----->>>>>>>")
    }
    componentWillUnmount(){
console.log("componentwillunmount=========>>>>>>>>>>>>")
    }
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
      <div>
<h1>Lifecycle</h1>
<button onClick={this.incrementCounter}>increment</button>
      <button onClick={this.decrementCounter}>decrement</button>
      </div>
    )
  }
}
