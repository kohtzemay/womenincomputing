import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

// js components
import HomeMain from './homePage/homeMain';
import AboutMain from './aboutPage/aboutMain';
import OpportunitiesMain from './opportunitiesPage/OpportunitiesMain';

import '../css/base.css';

ReactDOM.render((
  <div className="page">
      <Router history={browserHistory}>
          <Route path="/" component={HomeMain}/>
          <Route path="/about" component={AboutMain}/>
          <Route path="/opportunities" component={OpportunitiesMain}/>
      </Router>
  </div>
  ), document.getElementById('content')
);
