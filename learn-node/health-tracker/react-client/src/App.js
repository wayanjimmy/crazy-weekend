import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ImplicitCallback, SecureRoute, Security } from "@okta/okta-react";

import Home from "./Home";
import Points from "./Points";
import Login from "./Login";

function onAuthRequired({ history }) {
  history.push("/login");
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <Security
          issuer="https://dev-122759.oktapreview.com/oauth2/default"
          client_id="0oafo4ivxg5ro0lpG0h7"
          redirect_uri={window.location.origin + "/implicit/callback"}
          onAuthRequired={onAuthRequired}
        >
          <Route path="/" exact component={Home} />
          <SecureRoute path="/points" component={Points} />
          <Route
            path="/login"
            render={() => (
              <Login baseUrl="https://dev-122759.oktapreview.com" />
            )}
          />
          <Route path="/implicit/callback" component={ImplicitCallback} />
        </Security>
      </Router>
    );
  }
}

export default App;
