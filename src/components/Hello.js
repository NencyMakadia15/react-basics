import React from 'react';

//With JSX
// const Hello = () => {
//     return (
//         <div clasName = 'dummyClass'>
//             <h1>Hello World</h1>
//         </div>
//     );
// }

//Without JSX
const Hello = () => {
    return React.createElement(
        'div', 
        {id: 'hello', className: 'dummyClass'}, 
        React.createElement('h1', null, 'Hello World 2')
    );
}

export default Hello;