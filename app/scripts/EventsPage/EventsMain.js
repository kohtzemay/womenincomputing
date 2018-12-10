import React, { Component } from 'react';
import $ from 'jquery';

import Navbar from '../navbar/navbar';
import eventList from './eventList';
i
import { API_OPPS, POLL_INTERVAL } from '../global';

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
      url: API_OPPS,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(API_OPPS, status, err.toString());
      }.bind(this)
    });
  }

  handleSubmit(opp) {
    var opps = this.state.data;
    opp.id = Date.now();
    var newOpps = opps.concat([opp]);
    this.setState({ data: newOpps });

    $.ajax({
      url: API_OPPS,
      dataType: 'json',
      type: 'POST',
      data: opp,
      success: function(data) {
        this.setState({data: opps});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(API_OPPS, status, err.toString());
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
              <OpportunitiesList data={this.state.data} />
            </div>

            <div id="rightCol">
              <OpportunitiesForm handleSubmit={this.handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default EventsMain;