// OpportunitiesMain is the main component for the Opportunities page, which includes the
// opportunitiesList and opportunitiesForm components. It also stores the state for the
// list of opportunities from the database. This component contains functions that poll
// the database for opportunities and provides the AJAX for submission of new opportunities
// to the database.

import React, { Component } from 'react';
import $ from 'jquery';

import Navbar from '../navbar/navbar';
import OpportunitiesList from './opportunitiesList';
import OpportunitiesForm from './opportunitiesForm';
import { API_OPPS, POLL_INTERVAL } from '../global';

import '../../css/opportunities.css';

var fetching;

class OpportunitiesMain extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
    this.loadFromServer = this.loadFromServer.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetching = setInterval(this.loadFromServer, POLL_INTERVAL);
  }

  componentWillUnmount() {
    clearInterval(fetching);
  }

  loadFromServer() {
    $.ajax({
      url: API_OPPS,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({ data: data });
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
        <div className="page">
          <h1>Opportunities</h1>

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

export default OpportunitiesMain;
