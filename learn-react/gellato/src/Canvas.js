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

		this.setState({canvas});
	}
	render() {
		let parentProps = Object.assign({}, this.props);
		delete parentProps.children;
		let childProps = Object.assign({}, {canvas: this.state.canvas, parent: parentProps});
		let childrenWithProps = React.Children.map(this.props.children, (child, id) => {
			let currentProps = Object.assign({}, childProps, {index: id});
			return React.cloneElement(child, currentProps);
		});

		return (
			<div>
				<canvas id="canvas" width={this.props.width} height={this.props.height}></canvas>
				{childrenWithProps}
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
	title: 'Canvas',
	fill: 'white',
	stroke: 'black',
	strokeWidth: 2,
	fontFamily: 'Arial',
	fontSize: 13,
	upperCase: false
};

export default Canvas;
