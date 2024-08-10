import React, { Component } from 'react'

export default class Counter extends Component {

    componentDidUpdate(prevprops,prevState){
        
        if (prevprops.number !== this.props.number) {
            console.log(prevprops.number+" prev");
            console.log(this.props.number+" curr");

            console.log("componentDidUpdate:updated");
            
        }
    }
  render() {
    return (
      <div>
          <h2>{this.props.number}</h2>
      </div>
    )
  }
}
