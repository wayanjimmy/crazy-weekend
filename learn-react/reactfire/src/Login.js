import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './Login.css';

const loginButtonStyle = {
  margin: 20,
};

class AksesLogin extends Component {
  render() {
    const { onLoginButtonClicked } = this.props;
    return (
      <div className="Akses-login-container">
        <RaisedButton label="Login" style={loginButtonStyle} onClick={onLoginButtonClicked}></RaisedButton>
      </div>
    );
  }
}

export default AksesLogin;
