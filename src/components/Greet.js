import React from 'react'

// function Greet() {
//     return <h1>Hello Nency !</h1>
// }

//const Greet = ({name, heroName, children}) => {       //1st approch Destructuring props & state
const Greet = props => {
    const {name, heroName, children} = props          //2nd approch Destructuring props & state
    // console.log(props);
    return (
        <div>
            <h1>
                Hello {name} a.k.a {heroName}
            </h1>
            {children}
        </div>
    );
}

export default Greet;