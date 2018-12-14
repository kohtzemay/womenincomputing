// Navbar renders the navigation bar seen at the top of the page. It links out to
// all the available pages on the website using the Link component from react-router.
// It also links out to the Girls Who Code Calvin College website page, which is an
// external link, so a regular <a> tag has to be used instead.

import React, { Component } from 'react';
import { Link } from 'react-router';

import WicLogo from '../../img/logo.png';

class Navbar extends Component {

  render() {
    return (
      <div id="navbar">
        <div id="logo"><Link to='/'><img src={WicLogo} /></Link></div>
        <div id="menu-items">
          <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/about'><li>About Us</li></Link>
            <Link to='/events'><li>Events</li></Link>
            <Link to='/opportunities'><li>Opportunities</li></Link>
            <a href="https://cs.calvin.edu/documents/girls_who_code_club" target="_blank"><li>GWC</li></a>
          </ul>
        </div>
      </div>
    );
  }

}

export default Navbar;
