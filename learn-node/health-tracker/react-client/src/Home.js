import React from "react";
import { withAuth } from "@okta/okta-react";
import { Button, Container } from "reactstrap";
import { Link } from "react-router-dom";

import AppNavbar from "./AppNavbar";

export default withAuth(
  class Home extends React.Component {
    state = {
      authenticated: null,
      userinfo: null,
      isOpen: false
    };

    constructor(props) {
      super(props);
      this.checkAuthentication();
    }

    async checkAuthentication() {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        if (authenticated && !this.state.userinfo) {
          const userinfo = await this.props.auth.getUser();
          this.setState({ authenticated, userinfo });
        } else {
          this.setState({ authenticated });
        }
      }
    }

    login = () => {
      this.props.auth.login("/");
    };

    logout = () => {
      this.props.auth.logout("/");
      this.setState({ authenticated: null, userinfo: null });
    };

    componentDidMount() {
      this.checkAuthentication();
    }

    componentDidUpdate() {
      this.checkAuthentication();
    }

    render() {
      if (this.state.authenticated === null) {
        return null;
      }

      const button = this.state.authenticated ? (
        <div>
          <Button color="link">
            <Link to="/points">Manage Points</Link>
          </Button>
          <br />
          <Button color="link" onClick={() => this.logout()}>
            Logout
          </Button>
        </div>
      ) : (
        <Button color="primary" onClick={() => this.login()}>
          Login
        </Button>
      );

      const message = this.state.userinfo ? (
        <p>Hello, {this.state.userinfo.given_name}!</p>
      ) : (
        <p>Please login to manage your points.</p>
      );

      return (
        <div>
          <AppNavbar />
          <Container fluid>
            {message}
            {button}
          </Container>
        </div>
      );
    }
  }
);
