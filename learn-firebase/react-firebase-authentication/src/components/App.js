import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navigation from './Navigation'
import Landing from './Landing'
import SignUpPage from './SignUpPage'
import SignInPage from './SignInPage'
import PasswordForgetPage from './PasswordForgetPage'
import HomePage from './HomePage'
import AccountPage from './AccountPage'
import * as routes from '../constants/routes'
import withAuthentication from './withAuthentication'

class App extends React.Component {
  state = {authUser: null}

  render() {
    return (
      <Router>
        <div>
          <Navigation />

          <hr />

          <Route exact path={routes.LANDING} component={() => <Landing />} />
          <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
          <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
          <Route exact path={routes.HOME} component={() => <HomePage />} />
          <Route
            exact
            path={routes.PASSWORD_FORGET}
            component={() => <PasswordForgetPage />}
          />
          <Route
            exact
            path={routes.ACCOUNT}
            component={() => <AccountPage />}
          />
        </div>
      </Router>
    )
  }
}

export default withAuthentication(App)
