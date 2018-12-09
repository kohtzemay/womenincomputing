import React, { Component } from 'react';
import { Link } from 'react-router';

class Navbar extends Component {

  render() {
    return (
      <div id="navbar">
        <div id="logo"><Link to='/'><img src="/static/logo.png" /></Link></div>
        <div id="menu-items">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About Us</Link></li>
            <li><Link to='/events'>Events</Link></li>
            <li><Link to='/opportunities'>Opportunities</Link></li>
            <li><a href="https://cs.calvin.edu/documents/girls_who_code_club" target="_blank">GWC</a></li>
          </ul>
        </div>
      </div>
    );
  }

}

export default Navbar;
