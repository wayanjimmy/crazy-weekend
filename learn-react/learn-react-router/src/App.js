import React, { Component } from 'react';
import logo from './logo.svg';
import { Link } from 'react-router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <ul>
            <li>
              <Link to="/about">About</Link>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
