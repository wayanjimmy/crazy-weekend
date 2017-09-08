import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

const Name = ({ children, name }) => children(name);

Name.propTypes = {
  children: PropTypes.func.isRequired,
};

Name.defaultProps = {
  name: 'World',
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <Name name="Jimmy">{name => <div>Hello, {name}</div>}</Name>
        </p>
      </div>
    );
  }
}

export default App;
