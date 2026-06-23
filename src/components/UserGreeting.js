import React, { Component } from 'react'

class UserGreeting extends Component {
  
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }
  
    render() {

        //short circuit operator approach, if the condition is true then only the second part will be evaluated(it renders something or nothing)
        return this.state.isLoggedIn && <div>Welcome</div>


        //ternary conditional operator approach, it is the best approach to use when we have to render one thing or another thing based on the condition
        //return this.state.isLoggedIn ? (<div>Welcome</div>) : (<div>Welcome Guest</div>)

        
        //element variable approach, benefit of this approach is that it can be use inside the jsx
        // let message                             
        // if(this.state.isLoggedIn) {
        //     message = <div>Welcome</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }

        // return <div>{message}</div>


        
        // if(this.state.isLoggedIn) {
        //     return (
        //         <div>Welcome</div>
        //     )
        // } else {
        //     return (
        //         <div>Welcome Guest</div>
        //     )
        // }


    // return (
    //   <div>
    //     <div>Welcome</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting
