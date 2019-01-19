import React, { Component } from 'react';
import $ from 'jquery';

class LoginBox extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }

    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleFieldChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  toggleLogin() {
    $('.login').css('opacity', 0);
    $('.login').css('z-index', -1);
  }

  render() {
    return (
      <div className="loginBox">
        <div className="x" onClick={this.toggleLogin}>✕</div>
        <h2>Log in</h2>

        <form className="loginForm">
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleFieldChange}
              required
            />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleFieldChange}
              required
            />
          </div>

          <button type="submit">Log in</button>
        </form>

        <div className="noAccount">
          Don't have an account? <br />
          <b>Request one here.</b>
        </div>
      </div>
    );
  }

}

export default LoginBox;
