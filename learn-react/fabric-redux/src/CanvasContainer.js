import React, { Component } from 'react';

class CanvasContainer extends Component {
  loadAndRender() {
    let fabricCanvas = this.props.fabricInstance;

    fabricCanvas.loadFromJSON(this.props.canvasObjectState.canvasObject);
    fabricCanvas.renderAll();

    let selectedObject = this.props.canvasObjectState.selectedObject;
    if (selectedObject > -1) {
      fabricCanvas.setActiveObject(
        fabricCanvas.getObjects()[this.props.canvasObjectState.selectedObject]
      );
    }
  }
  render() {
    this.loadAndRender();
    return <canvas ref="objectsCanvas" />;
  }
}

export default CanvasContainer;
