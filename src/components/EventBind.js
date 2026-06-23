import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }

      //this.clickHandler = this.clickHandler.bind(this)     //3rd approach(binding eventHandler in constructor)

    }
    
    // clickHandler() {
    //     this.setState({
    //         message: 'Goodbye!'
    //     })
    //     console.log(this);
    // }

    clickHandler = () => {                  //4th approach(class property as arrow function)
        this.setState({
            message: 'Goodbye!'
        })
        console.log(this);
    }          

  render() {
    return (
      <div>
        <div>{this.state.message}</div>

        {/* 1st approach(binding in render method)  */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */} 

        {/* --2nd approach(arrow function in render method) (easiest way to pass parameters if code doesn't involve rerendering nested children components) */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}

        {/* --3rd approach(binding eventHandler in constructor) (best approach) */}
        <button onClick={this.clickHandler}>Click</button>          

      </div>
    )
  }
}

export default EventBind
