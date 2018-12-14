// Defines all of the routes within this application and the component that should be
// rendered when a browser hits that route.

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Switch } from 'react-router';

// JS components
import HomeMain from './homePage/homeMain';
import AboutMain from './aboutPage/aboutMain';
import EventsMain from './EventsPage/EventsMain';
import OpportunitiesMain from './opportunitiesPage/opportunitiesMain';

// CSS components
import '../css/navbar.css';
import '../css/homepage.css';
import '../css/base.css';
import '../css/about.css';
import '../css/opportunities.css';
import '../css/event.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={HomeMain}/>
    <Route path="/about" component={AboutMain}/>
    <Route path="/opportunities" component={OpportunitiesMain}/>
    <Route path="/Events" component={EventsMain}/>
  </Router>,
  document.getElementById('content')
);
