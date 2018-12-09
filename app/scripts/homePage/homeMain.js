import React from 'react';
import ReactDOM from 'react-dom';

import HomepageBoxes from './homepageBoxes.js';
import Navbar from '../navbar/navbar';

var HomeMain = React.createClass ({

render: function(){
  return(
  <div className="wholePage">
  <Navbar />
  <div className="centeringFactor">
  <img className="HomePageImage" src="/static/homeImg.png" alt="HomePage Image"/>
  <HomepageBoxes/ >
  </div>
  </div>
)
}

});



export default HomeMain;
