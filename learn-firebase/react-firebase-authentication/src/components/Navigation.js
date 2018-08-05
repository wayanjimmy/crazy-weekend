import React from 'react'
import {Link} from 'react-router-dom'

import * as routes from '../constants/routes'
import SignOutButton from './SignOut'
import AuthUserContext from './AuthUserContext'

const Navigation = ({authUser}) => (
  <AuthUserContext.Consumer>
    {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
  </AuthUserContext.Consumer>
)

const NavigationAuth = () => (
  <ul>
    <li>
      <Link to={routes.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={routes.HOME}>Home</Link>
    </li>
    <li>
      <Link to={routes.ACCOUNT}>Account</Link>
    </li>
    <li>
      <SignOutButton />
    </li>
  </ul>
)

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={routes.SIGN_IN}>Sign In</Link>
    </li>
    <li>
      <Link to={routes.SIGN_UP}>Sign Up</Link>
    </li>
  </ul>
)

export default Navigation
