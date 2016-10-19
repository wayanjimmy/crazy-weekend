import React, { Component } from 'react';
import { fabric } from 'fabric-webpack';

class Canvas extends Component {
	constructor(props) {
		super(props);
		this.state = {
			canvas: null
		};
	}
	componentDidMount() {
		let canvas = new fabric.Canvas('canvas');
		let { padding, width, height, fill, stroke, strokeWidth } = this.props;
		let rect = new fabric.Rect({
			top: padding,
			left: padding,
			width: width - 2 * padding,
			height: height - 2 * padding,
			fill: fill,
			stroke: stroke,
			selectable: false,
			strokeWidth: strokeWidth
		});
		canvas.add(rect);

		// create a rectangle object
		let rect = new fabric.Rect({
		  left: 100,
		  top: 100,
		  fill: 'red',
		  width: 20,
		  height: 20
		});

		canvas.add(rect);

		this.setState({canvas});
	}
	render() {
		return (
			<div>
				<canvas id="canvas"></canvas>
			</div>
		);
	}
}

Canvas.defaultProps = {
	width: 500,
	height: 500,
	top: 0,
	left: 0,
	padding: 0,
	title: 'Comic Title',
	column: 1,
	fill: 'white',
	stroke: 'black',
	strokeWidth: 1,
	fontFamily: 'Arial',
	fontSize: 13,
	upperCase: false
};

export default Canvas;
