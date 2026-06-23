//import logo from './logo.svg';
import './App.css';
//import Greet from './components/Greet';
//import Welcome from './components/Welcome';
//import Hello from './components/Hello';
//import Message from './components/Message';
//import Counter from './components/Counter';
//import ClassClick from './components/ClassClick';
//import FunctionClick from './components/FunctionClick';
//import EventBind from './components/EventBind';
//import ParentComponent from './components/ParentComponent';
//import UserGreeting from './components/UserGreeting';
//import NameList from './components/NameList';
//import Stylesheet from './components/Stylesheet';
//import Inline from './components/Inline';
//import './appStyles.css';
//import styles from './appStyles.module.css';
//import LifecycleA from './components/LifecycleA';
//import FragmentDemo from './components/FragmentDemo';
//import Table from './components/Table';
//import PureComp from './components/PureComp';
//import ParentComp from './components/ParentComp';


// function App() {
//   return (
//     <div className="App">
//       {/* <ParentComp /> */}
//       {/* <PureComp /> */}
//       {/* <Table /> */}
//       {/* <FragmentDemo /> */}
//       {/* <LifecycleA /> */}
//       {/* <h1 className='error'>Error</h1> */}
//       {/* <h1 className={styles.success}>Success</h1> */}
//       {/* <Inline /> */}
//       {/* <Stylesheet primary={true} /> */}
//       {/* <NameList/> */}
//       {/* <UserGreeting /> */}
//       {/* <ParentComponent /> */}
//       {/* <FunctionClick /> */}
//       {/* <ClassClick /> */}
//       {/* <EventBind /> */}
//       {/* <Counter /> */}
//       {/* <Message /> */}
//       {/* <Greet name="Riya" heroName="Superwoman" >
//         <p>This is children props</p>
//       </Greet> */}
//       {/* <Greet name="Priya" heroName="Wonder Woman" >
//         <button>Action</button>
//       </Greet>
//       <Greet name="Siya" heroName="Captain Marvel" />
//       <Welcome name="Riya" heroName="Superwoman"/> */}
//       {/* <Welcome name="Priya" heroName="Wonder Woman"/> */}
//       {/* <Welcome name="Siya" heroName="Captain Marvel"/> */}
//       {/* <Hello /> */}
//     </div>
//   );
// };


//Form
// import React, { Component } from 'react';
// import Form from './components/Form';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Form />
//       </div>
//     );
//   }
// }


//Refs
import React, { Component } from 'react';
//import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FocusInput />
        {/* <RefsDemo /> */}
      </div>
    );
  }
}


export default App;
