import React from 'react'

import AuthUserContext from './AuthUserContext'
import {firebase} from '../firebase'

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    state = {authUser: null}

    componentDidMount() {
      firebase.auth.onAuthStateChanged(
        authUser =>
          authUser ? this.setState({authUser}) : this.setState({authUser: null})
      )
    }

    render() {
      const {authUser} = this.state

      return (
        <AuthUserContext.Provider value={authUser}>
          <Component />
        </AuthUserContext.Provider>
      )
    }
  }

  return WithAuthentication
}

export default withAuthentication
