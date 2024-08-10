import React, { Component } from 'react'
import Counter from './Component/Counter';

export default class App extends Component {

  constructor(){
    super();
    this.state={
      count: 0
    }
    console.log("")
  }

  componentDidMount(){
    console.log("componentDidMount: first time render")
  }

  inc(){
    this.setState({count:this.state.count+1})
  }
  componentWillUnmount(){
    console.log("componentWillUnmount:component remove");
    
  }
  render() {
    return (
    <>
       <h1>hello react lifecycle Mounting</h1>
       {/* <Counter number={this.state.count} /> */}
       {/* <h2>{this.state.count}</h2> */}
       {/* <button onClick={this.inc.bind(this)}>click me</button> */}
       <button onClick={()=>{this.inc()}}>click me</button>
    </>
    )
  }
}
