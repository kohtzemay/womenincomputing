import React, { Component } from 'react';
import $ from 'jquery';

import Navbar from '../navbar/navbar';
import { API_USERS } from '../global';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: {},
      email: ''
    }

    this.getProfile = this.getProfile.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
    this.getUsers = this.getUsers.bind(this);
  }

  componentDidMount() {
    this.getProfile();
    this.getUsers();
  }

  handleFieldChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  getProfile() {
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ currentUser: profile, email: profile.name });
      });
    } else {
      this.setState({ currentUser: userProfile, email: userProfile.name });
    }
  }

  getUsers() {
    const { getAccessToken } = this.props.auth;
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://wic-users.auth0.com/api/v2/users",
      "method": "GET",
      "headers": {
        "authorization": "Bearer " + getAccessToken(),
        'Access-Control-Allow-Origin': '*'
      }
    }

    $.ajax(settings).done(function (response) {
      console.log(response);
    });
  }

  updateProfile() {
    console.log('this is firing');
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://wic-users.auth0.com/dbconnections/change_password",
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        'Access-Control-Allow-Origin': '*'
    },
      "processData": false,
      "data": {
        "client_id": "zfZNAxyigFqFXAGo7FRKLeBCi2CeYSal",
        "email": this.state.currentUser.name,
        "connection": "Username-Password-Authentication"
      }
    }

    $.ajax(settings).done(function (response) {
      console.log(response);
    });
  }

   render() {
     const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <div className="page">
          {/* if logged in */}
          { isAuthenticated() &&
            <div>
              <h1>Dashboard</h1>
              { this.state.currentUser &&
                <h2>Hello, {this.state.currentUser.nickname}!</h2>
              }
              <br />
              <div className="main-content" style={{ 'justifyContent': 'space-around' }}>

                <div className="boxComp">
                  <div className="header-section">
                    <img src="https://cdn0.iconfinder.com/data/icons/elasto-online-store/26/00-ELASTOFONT-STORE-READY_user-circle-512.png" />
                    <h5>Manage Account</h5>
                  </div>
                  Make changes to your account here.
                  <br />
                  { this.state.currentUser && (
                    <div className="profile-panel">
                      <div id="dp">
                        <img src={this.state.currentUser.picture} className="profile-pic" />
                      </div>
                      <form>
                        <label htmlFor="Email">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={this.state.email}
                          onChange={this.handleFieldChange}
                        />

                        <label htmlFor="Password">Password</label>
                        <input
                          type="password"
                          name="password"
                          placeholder="Enter new password"
                        />
                        <br />
                        <input type="Submit" value="Post"/>
                      </form>

                      <p><a onClick={() => {this.updateProfile()}}>Forgot password?</a></p>
                    </div>
                  )}

                  { !this.state.currentUser && (
                    <i>Fetching profile...</i>
                  )
                  }
                </div>

                <div className="boxComp">
                  <div className="header-section">
                    <img src="https://cdn2.iconfinder.com/data/icons/elasto-online-store/26/00-ELASTOFONT-STORE-READY_sliders-512.png" />
                    <h5>Manage Users</h5>
                  </div>
                  Follow these steps to view and manage users:
                  <ol>
                    <li>Go to <a href="https://manage.auth0.com" target="blank">https://manage.auth0.com</a></li>
                    <li>Sign in using WIC's Gmail credentials</li>
                    <li>Click on "Users" located in the menu panel on the left</li>
                    <li>Click on any of the users listed to view, edit, or delete their details</li>
                  </ol>
                </div>

                <div className="boxComp">
                  <div className="header-section">
                    <img src="https://cdn2.iconfinder.com/data/icons/elasto-online-store/26/00-ELASTOFONT-STORE-READY_sliders-512.png" />
                    <h5>Manage Events & Opportunities</h5>
                  </div>
                  <p>Delete or update events and opportunities.</p>
                </div>

              </div>

            </div>
          }

          {/* if not logged in */}
          { !isAuthenticated() && (
          <div className="main-content">
            <b>You are not logged in.</b>
          </div>
          )}
        </div>
      </div>
    );
  }

}

export default Dashboard;
