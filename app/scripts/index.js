import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Switch } from 'react-router';

// js components
import HomeMain from './homePage/homeMain';
import AboutMain from './aboutPage/aboutMain';
import OpportunitiesMain from './opportunitiesPage/OpportunitiesMain';
import EventsMain from './EventsPage/EventsMain';
import '../css/navbar.css';
import '../css/homepage.css';
import '../css/base.css';
import '../css/about.css';
import '../css/opportunities.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={HomeMain}/>
    <Route path="/about" component={AboutMain}/>
    <Route path="/opportunities" component={OpportunitiesMain}/>
    <Route path="/Events" component={EventsMain}/>
  </Router>,
  document.getElementById('content')
);
