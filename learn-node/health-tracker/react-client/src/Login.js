import React from "react";
import { Redirect } from "react-router-dom";
import { withAuth } from "@okta/okta-react";

import OktaSignInWidget from "./OktaSignInWidget";

export default withAuth(
  class Login extends React.Component {
    state = {
      authenticated: null
    };

    constructor(props) {
      super(props);
      this.checkAuthentication();
    }

    checkAuthentication = async () => {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    };

    onSuccess = res => {
      return this.props.auth.redirect({ sessionToken: res.session.token });
    };

    onError = err => {
      console.log(`error longging in`, err);
    };

    componentDidUpdate() {
      this.checkAuthentication();
    }

    render() {
      if (this.state.authenticated === null) {
        return null;
      }

      return this.state.authenticated ? (
        <Redirect to={{ pathname: "/" }} />
      ) : (
        <OktaSignInWidget
          baseUrl={this.props.baseUrl}
          onSuccess={this.onSuccess}
          onError={this.onError}
        />
      );
    }
  }
);
