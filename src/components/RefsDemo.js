import React, { Component } from 'react'

class RefsDemo extends Component {

    constructor(props) {
        super(props)
        this.inputRef = React.createRef()

        //2nd approach (callback ref)
        this.cbRef = null
        this.setCbRef = element => {
            this.cbRef = element
        }
    }

    componentDidMount() {

        //1st approach (createRef)
        // this.inputRef.current.focus()
        // console.log(this.inputRef)

        //2nd approach (callback ref)
        if(this.cbRef) {
            this.cbRef.focus()
        }

    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default RefsDemo
