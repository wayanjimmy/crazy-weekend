import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

class AksesNavBar extends Component {
  render() {
    return (
      <AppBar title="Akses" onClick={this.props.onDrawerToggle}></AppBar>
    );
  }
}

export default AksesNavBar;
