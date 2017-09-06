import React, { Component } from 'react';
import fabric from 'fabric-webpack';

class FabricCanvas extends Component {
  fabricCanvas = new fabric.Canvas();

  componentDidMount() {
    let el = this.refs.canvasContainer.refs.objectCanvas;
    this.fabricCanvas.initialize(el, {
      width: 400,
      height: 400
    });

    this.refs.canvasContainer.loadAndRender();

    fabricCanvas.on('mouse:up', () => {

    });
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default FabricCanvas;
