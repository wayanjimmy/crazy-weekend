import React, { Component } from 'react';
import './App.css';

class ReducerComponent extends Component {
  reducer = (state, action) => state;

  reduce = action => this.setState(state => this.reducer(state, action));
}

class Counter extends ReducerComponent {
  state = {
    count: 0,
  };

  reducer = (state, action) => {
    switch (action) {
      case 'increment':
        return { ...state, count: state.count++ };
      case 'decrement':
        return { ...state, count: state.count-- };
      case 'reset':
        return { ...state, count: 0 };
      default:
        return state;
    }
  };

  render() {
    return (
      <div>
        Counter: {this.state.count}
        <button onClick={() => this.reduce('increment')}>-</button>
        <button onClick={() => this.reduce('decrement')}>+</button>
        <button onClick={() => this.reduce('reset')}>Reset</button>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

export default App;
