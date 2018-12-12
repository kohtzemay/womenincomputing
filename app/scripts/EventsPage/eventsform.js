import React, { Component } from 'react';

class EventsForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      companyName: '',
      location: '',
      description: '',
      link: '',
      type: ''
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

    this.props.handleSubmit({ title: title, name: name, location: location, description: this.state.description, date:date, time: time });
    this.setState({ title: '', companyName: '', location: '', description: '', link: '', type: '' });
  }

  render() {
    return (
      <div className="form">
        <h2> Add Event </h2>

        <form className="eventsForm" onSubmit={this.handleSubmit}>
          <div className="input-field">
            <label for=" Event-title">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Job/internship title"
              value={this.state.title}
              onChange={this.handleFieldChange}
              required
            />
          </div>

          <div className="input-field">
            <label for="Event-name">EventName</label>
            <input
              type="text"
              name="EventName"
              placeholder="EventName"
              value={this.state.EventName}
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
            <label for="description">Description</label>
            <textarea
              type="text"
              name="description"
              placeholder="Write a short description of the Event here..."
              value={this.state.description}
              onChange={this.handleFieldChange}
              required
            />
          </div>

          <div className="input-field">
            <label for="link">link</label>
            <input
              type="text"
              name="link"
              placeholder="Link to job application page"
              value={this.state.link}
              onChange={this.handleFieldChange}
              required
            />
          </div>

          <div className="input-field">
            <label for="type">Type</label>
            <input
              type="text"
              name="type"
              placeholder=" Netwrorking or Career Fair?"
              value={this.state.type}
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
