import React, { Component } from 'react'
import Counter1 from './Component/Function/Funtions'



export default class App extends Component {
  constructor(){
    super();
    this.state={
      count: 0
    }
    console.log("hi Consstrucor")
  }

  // componentDidMount(){
  //   console.log("componentDidMount: first time render")
  // }

  inc(){
    this.setState({count:this.state.count+1})
  }
  // componentWillUnmount(){
  //   console.log("componentWillUnmount:component remove");
    
  // }
  render() {  
    return (
      <>
        <h1>funComp App Componet</h1>
      
         <Counter1 number={this.state.count} />
       <button onClick={()=>{this.inc() }}>click me</button> 
      </>
    )
  } 
}
