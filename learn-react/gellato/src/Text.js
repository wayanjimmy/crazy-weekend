import React, { Component } from 'react';
import { Button } from 'react-foundation';
import { fabric } from 'fabric-webpack';

class Text extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: null
		};
	}
	createText() {
		setTimeout(() => {
			const { canvas } = this.props;

			if (!canvas) {
				return;
			}

			let currentProps = Object.assign({}, this.props);
			delete currentProps.canvas;

			let text = this.state.text;

			if (!text) {
				text = new fabric.Text(this.props.value, currentProps);
			} else {
				text.set(currentProps);
			}

			canvas.add(text);
		});
	}
	update() {
		this.createText();
	}
	componentDidMount() {
		this.update();
	}
	render() {
		return (
			<div>
				<div className="text-editor">
					<Button>B</Button>
				</div>
			</div>
		);
	}
}

Text.defaultProps = {
	value: 'Hello world',
	left: 10,
	top: 10,
	fontSize: 20,
	textAlign: 'left',
	fill: 'black'
};

export default Text;
