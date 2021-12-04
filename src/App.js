import React, { Component } from 'react';
import Register from './Components/Register/Register';
import './App.css';
import Signin from './Components/Signin/Signin';

class App extends Component {
  render() {
    return (
      <div className='App'>
				<Signin />
        <Register />
      </div>
    );
  }
}



export default App;
