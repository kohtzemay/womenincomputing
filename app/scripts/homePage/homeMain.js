import React from 'react';

import HomepageBoxes from './homepageBoxes.js';
import Navbar from '../navbar/navbar';
import WelcomeImage from '../../img/homeImg.png';

{/*This is the page that condences all of the react components into one HTML condensed
  react compoent file*/}

var HomeMain = React.createClass ({

render: function(){
  return(
  <div className="wholePage">
    <Navbar />
    <div className="centeringFactor">
      <img className="HomePageImage" src={WelcomeImage} alt="HomePage Image"/>
      <HomepageBoxes/ >
    </div>
  </div>
)
}

});



export default HomeMain;
