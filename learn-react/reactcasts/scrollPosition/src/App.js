import React, { Component } from 'react';
import ScrollPos from './facc/ScrollPos';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="spacer"></div>
        <ScrollPos>
          {
            position => <h1>{'Awesome Text!'.substring(0, position*13)}</h1>
          }
        </ScrollPos>
        <div className="spacer"></div>
      </div>
    );
  }
}

export default App;
