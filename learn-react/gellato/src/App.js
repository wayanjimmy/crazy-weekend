import React, { Component } from 'react';
import Canvas from './Canvas';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Canvas title="Gellato" fontSize="13" upperCase={true}>
      	</Canvas>
      </div>
    );
  }
}

export default App;
