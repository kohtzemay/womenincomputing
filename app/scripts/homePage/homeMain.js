import React, { Component } from 'react';

import HomepageBoxes from './homepageBoxes.js';
import Navbar from '../navbar/navbar';

{/*This is the page that condences all of the react components into one HTML condensed
  react compoent file*/}
class HomeMain extends Component {
  render() {
    return (
      <div className="wholePage">
        <div className="centeringFactor">
          <img className="HomePageImage" src={require('img/homeImg.png')} />
          <HomepageBoxes/ >
        </div>
      </div>
    )
  }
}



export default HomeMain;
