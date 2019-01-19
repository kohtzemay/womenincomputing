// EventsList is the component that lists out all the available events
// pulled from the mLab database. It receives the list of events as a prop from
// EventsMain and maps through them.

import React, { Component } from 'react';

class EventsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return (
      <div>
        <h2>Events</h2>

        {this.props.data.map(function(o) {
            var date = new Date(o.date);
            return (
              <div className="events" key={o._id}>

                <div className="date">
                  <div className="day">{date.getDay()}</div>
                  <div className="month">{months[date.getMonth()]}</div>
                </div>
                <b>{o.name}</b><br />
                {o.location} | {o.time}<br />
              </div>
            )
          }
        )}
      </div>
    );
  }
}

export default EventsList;
