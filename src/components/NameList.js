import React from 'react'
import Person from './Person'

function NameList() {

//first approach
//   const names = ['Alice', 'Bob', 'Charlie']
//   const nameList = names.map(name => <h2>{name}</h2>)
//   return <div>{nameList}</div>


//second approach
    // const persons = [
    //     {
    //         id: 1, 
    //         name: 'Alice', 
    //         age: 25, 
    //         skill: 'React'
    //     },
    //     {
    //         id: 2,
    //         name: 'Bob',
    //         age: 30,
    //         skill: 'Angular'
    //     },
    //     {
    //         id: 3,
    //         name: 'Charlie',
    //         age: 35,
    //         skill: 'Vue'
    //     }
    // ]
    // const personList = persons.map(person => <Person key={person.id} person={person} />)            
    // // key is used to uniquely identify each element in the list, it helps React to efficiently update and render the list when changes occur. It should be a unique value, such as an ID, that does not change over time. In this case, we are using the 'id' property of each person object as the key for the corresponding Person component.
    // return <div>{personList}</div>


    const names = ['Alice', 'Bob', 'Charlie']
    const nameList = names.map((name, index) => <h2 key = {index}>{index} {name}</h2>)
    return <div>{nameList}</div>
}

export default NameList
