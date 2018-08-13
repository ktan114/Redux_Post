import React, { Component } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts'

class App extends Component {

  componentWillMount() {
    console.log(123)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Posts />
      </div>
    );
  }
}

export default App;
