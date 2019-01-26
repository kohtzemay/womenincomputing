// Defines all of the routes within this application and the component that should be
// rendered when a browser hits that route.

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';

// JS components
import Navbar from './navbar/navbar';
import HomeMain from './homePage/homeMain';
import AboutMain from './aboutPage/aboutMain';
import EventsMain from './eventsPage/eventsMain';
import OpportunitiesMain from './opportunitiesPage/opportunitiesMain';
import Dashboard from './admin/dashboard';

import history from './auth/history';
import Callback from './auth/callback';
import Auth from './auth/auth';

// CSS components
import '../css/navbar.css';
import '../css/homepage.css';
import '../css/base.css';
import '../css/about.css';
import '../css/opportunities.css';
import '../css/event.css';
import '../css/admin.css';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

const Routes = () => (
  <Router history={history}>
    <div>
      <Navbar auth={auth} />
      <Route exact path="/" component={HomeMain} />
      <Route path="/about" component={AboutMain} />
      <Route path="/opportunities" component={(props) => <OpportunitiesMain auth={auth} {...props} />} />
      <Route path="/events" component={(props) => <EventsMain auth={auth} {...props} />} />
      <Route path="/dashboard" render={(props) => <Dashboard auth={auth} {...props} />} />
      <Route path="/callback" render={(props) => {
        handleAuthentication(props);
        return <Callback {...props} />
      }} />
    </div>
  </Router>
)


export default Routes;
