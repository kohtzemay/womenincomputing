import React from 'react';
import ReactDOM from 'react-dom';

import HomepageBoxes from './homepageBoxes.js';


var HomeMain = React.createClass ({

render: function(){
  return(
  <div className="wholePage">
  <img className="HomePageImage" src="/static/homeImg.png" alt="HomePage Image"/>
  <HomepageBoxes/ >
  </div>
)
}

});



export default HomeMain;
