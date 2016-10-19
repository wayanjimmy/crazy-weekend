import React, { Component } from 'react';
import Canvas from './Canvas';
import Rectangle from './Rectangle';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Canvas fontSize="13" upperCase={true} padding={2}>
					<Rectangle />
					<Rectangle width={50} height={50} fill="blue" left={200} top={200} />
      	</Canvas>
      </div>
    );
  }
}

export default App;
