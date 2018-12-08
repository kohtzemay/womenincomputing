import React, { Component } from 'react';
import $ from 'jquery';

import OpportunitiesList from './OpportunitiesList';
import OpportunitiesForm from './OpportunitiesForm';
import { API_OPPS, POLL_INTERVAL } from '../global';

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
      <div className="main-content">
        <h1>Opportunities Page</h1>

        <div className="left-col">
          <OpportunitiesList data={this.state.data} />
        </div>

        <div className="right-col">
        </div>
      </div>
    );
  }

}

export default OpportunitiesMain;
