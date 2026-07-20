import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'

class ComponentE extends Component {

    //way to use context in class component
    static contextType = UserContext

  render() {
    return (
        <div>
            Component E context {this.context}
            <ComponentF />
        </div>
    )
  }
}

// Another way to use context in class component
//ComponentE.contextType = UserContext

export default ComponentE


//Limitation of contextType : is that you can only subscribe to a single context using this.context. If you need to read more than one, you can use <UserConsumer> component instead.