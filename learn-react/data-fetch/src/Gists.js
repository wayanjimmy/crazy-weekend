import React, { Component } from 'react';

class Gists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gists: [],
    };
  }
  componentDidMount() {
    fetch('https://api.github.com/users/wayanjimmy/gists')
      .then(response => response.json())
      .then(gists => this.setState({ gists }));
  }
  render() {
    return (
      <ul>{this.state.gists.map(gist => <li key={gist.id}>{gist.description}</li>)}</ul>
    );
  }
}

export default Gists;
