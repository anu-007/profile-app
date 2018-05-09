import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/LoginPage';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Login />
      </div>
    );
  }
}

export default App;
