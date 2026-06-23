import React, { Component } from 'react'
//import RegComp from './RegComp'
//import PureComp from './PureComp'
import MemoComp from './MemoComp'

// If we use PureComponent instead of Component in the ParentComp, then the render method of ParentComp will not be called after every 2 seconds because PureComponent implements shouldComponentUpdate() with a shallow prop and state comparison. So, if the state or props do not change, it will not re-render the component.
//class ParentComp extends PureComponent {

class ParentComp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'Nency'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Nency'
            })
        }, 2000)
    }

  render() {
    console.log('**********Parent Component Render**********')
    return (
      <div>
        Parent Component
        <MemoComp name = {this.state.name} />
        {/* <RegComp name = {this.state.name} />
        <PureComp name = {this.state.name} /> */}
      </div>
    )
  }
}

export default ParentComp
