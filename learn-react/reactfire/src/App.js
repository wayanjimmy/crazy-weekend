import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Navbar from './AksesNavbar';
import Login from './Login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      drawerOpen: false,
      currentPage: 'login'
    };
  }
  componentDidMount(){
    this.props.firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          user: user,
          currentPage: 'members'
        });
      }
    });
  }
  render() {
    let aksesLogin = '';
    let aksesMainContent = '';
    let currentPage = '';
    if (this.state.user === null) {
      aksesLogin = <Login onLoginButtonClicked={this.onLoginButtonClicked.bind(null)}></Login>;
    }

    return (
      <MuiThemeProvider>
        <div>
          <Navbar onDrawerToggle={this.onDrawerToggle.bind(null)}></Navbar>
          <Drawer
           docked={false}
           width={200}
           open={this.state.drawerOpen}>
           <MenuItem onTouchTap={this.handleClose.bind(null, 'members')}>Members</MenuItem>
           <MenuItem onTouchTap={this.handleClose.bind(null, 'change-space')}>Change Space</MenuItem>
           </Drawer>
          {aksesLogin}
        </div>
      </MuiThemeProvider>
    );
  }
  onLoginButtonClicked = (e) => {
    e.preventDefault();
    const { firebase } = this.props;
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(result => {
      this.setState({
        user: result.user
      });
    }).catch(error => {
      console.log(error);
    });
  }
  onDrawerToggle = (e) => {
    e.preventDefault();
    this.setState({
      drawerOpen: !this.state.drawerOpen
    });
  }
  handleClose = (page, e) => {
    this.setState({
      currentPage: page,
      drawerOpen: false
    });
  }
}

export default App;
