import React, { Component } from 'react';
import { fabric } from 'fabric-webpack';

class Rectangle extends Component {
	constructor(props) {
		super(props);

		this.state = {
			rectangle: null
		};
	}
	createRectangle() {
		setTimeout(() => {
			const { canvas } = this.props;

			if (!canvas) {
				return;
			}

			let { left, top, fill, width, height} = this.props;

			let currentProps = {
			  left,
			  top,
			  fill,
			  width,
			  height
			};

			let rectangle = this.state.rectangle;

			if (!rectangle) {
				rectangle = new fabric.Rect(currentProps);
			} else {
				rectangle.set(currentProps)
			}

			this.setState({rectangle});

			canvas.add(rectangle);
		});
	}
	update() {
		this.createRectangle()
	}
	componentDidMount() {
		this.update();
	}
	render() {
		return (
			<div />
		);
	}
}

Rectangle.defaultProps = {
	fill: 'red',
	width: 20,
	height: 20,
	left: 100,
	top: 100
};

export default Rectangle;
