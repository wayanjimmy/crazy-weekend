import React, { Component } from 'react';
import Navbar from './Navbar';
import Profile from './Profile';
import Search from './Search';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'wayanjimmy',
      userData: [],
      userRepos: [],
      perPage: 5
    };
  }
  getUserData() {
    $.ajax({
      url: `https://api.github.com/users/${this.state.username}?client_id${this.props.clientId}&client_secret=${this.props.clientSecret}`,
      dataType: 'json',
      cache: false,
      success: (data) => {
        this.setState({
          userData: data
        });
      },
      error: (xhr, status, err) => {
        this.setState({
          username: null
        });
        alert(err);
      }
    });
  }
  getUserRepos() {
    $.ajax({
      url: `https://api.github.com/users/${this.state.username}/repos?per_page=${this.state.perPage}client_id${this.props.clientId}&client_secret=${this.props.clientSecret}&sort=created`,
      dataType: 'json',
      cache: false,
      success: (data) => {
        this.setState({
          userRepos: data
        });
      },
      error: (xhr, status, err) => {
        this.setState({
          username: null
        });
        alert(err);
      }
    });
  }
  handleFormSubmit(username) {
    this.setState({
      username: username
    }, () => {
    this.getUserData();
    this.getUserRepos();
    });
  }
  componentDidMount() {
    this.getUserData();
    this.getUserRepos();
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Search onFormSubmit={this.handleFormSubmit.bind(this)}/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Profile {...this.state} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  clientId: React.PropTypes.string,
  clientSecret: React.PropTypes.string
};

App.defaultProps = {
  clientId: '854f0607d58c35e52132',
  clientSecret: '2b047f387d93c6d4488699e15c4d6fffaf667657'
};

export default App;
