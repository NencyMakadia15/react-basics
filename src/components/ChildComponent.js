import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler('child')}>Greet Parent</button>      
    </div>
  )
}

export default ChildComponent

// we are passing the child name as an argument to the greetHandler function which is defined in the parent component and passed as a prop to the child component