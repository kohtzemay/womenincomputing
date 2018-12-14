// EventsForm renders the form that allows users to submit new events
// to the database. It holds the state attributes for a new opportunity and calls
// the handleSubmit function defined in EventsMain when the post button is
// clicked. 


import React, { Component } from 'react';

class EventsForm extends Component {
  constructor() {
    super();
    this.state = {
      
      name: '',
      location: '',
      time: '',
      date: ''
      
    }

    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFieldChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    // var title = this.state.title.trim();
    var name = this.state.name.trim();
    var location = this.state.location.trim();
    var date = this.state.date.trim();
    var time = this.state.time.trim().toLowerCase();

    this.props.handleSubmit({ name: name, location: location, date: date, time: time });
    this.setState({ name: '', location: '', date: '', time: '' });
  }

  render() {
    return (
      <div className="form">
        <h2> Add Event </h2>

        <form className="eventsForm" onSubmit={this.handleSubmit}>
          <div className="input-field">
            <label for=" Event-title">Event Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter the event's name"
              value={this.state.name}
              onChange={this.handleFieldChange}
              required
            />
          </div>

          <div className="input-field">
            <label for="Event-name">EventDate</label>
            <input
              type="text"
              name="date"
              placeholder="2018/09/10"
              value={this.state.date}
              onChange={this.handleFieldChange}
              required
            />
          </div>

          <div className="input-field">
            <label for="location">Location</label>
            <input
              type="text"
              name="location"
              placeholder="Austin, TX, US"
              value={this.state.location}
              onChange={this.handleFieldChange}
              required
            />
          </div>

          <div className="input-field">
            <label for="description">Event Time</label>
            <textarea
              type="text"
              name="time"
              placeholder="08:00am - 9:00am"
              value={this.state.time}
              onChange={this.handleFieldChange}
              required
            />
          </div>

          <input type="submit" value="Post" />
        </form>

      </div>
    );
  }

}

export default EventsForm;
