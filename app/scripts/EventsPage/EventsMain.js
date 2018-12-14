// EventsMain is the main component for the events page, which includes the
// eventsList and eventsForm components.  Events main stores the state for the
// list of Events from the database. This component contains functions that pull
// the database for events and provides the AJAX for submission of new events
// to the database.


import React, { Component } from 'react';
import $ from 'jquery';

import Navbar from '../navbar/navbar';
import EventList from './EventList';
import EventsForm from './eventsform';
import { API_EVE, POLL_INTERVAL } from '../global';

import '../../css/event.css';

class EventsMain extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
    this.loadFromServer = this.loadFromServer.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.loadFromServer();
    setInterval(this.loadFromServer, POLL_INTERVAL);
  }

  loadFromServer() {
    $.ajax({
      url: API_EVE,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(API_EVE, status, err.toString());
      }.bind(this)
    });
  }

//

  handleSubmit(eve) {
    var events = this.state.data;
    eve.id = Date.now();
    var newEve = events.concat([eve]);
    this.setState({ data: newEve });

    $.ajax({
      url: API_EVE,
      dataType: 'json',
      type: 'POST',
      data: eve,
      success: function(data) {
        this.setState({data: events});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(API_EVE, status, err.toString());
      }.bind(this)
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="page">
          <h1>Events</h1>

          <div className="main-content">
            <div id="leftCol">
              <EventList data={this.state.data} />
            </div>

            <div id="rightCol">
              <EventsForm handleSubmit={this.handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default EventsMain;
