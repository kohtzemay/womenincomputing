// EventsList is the component that lists out all the available events
// pulled from the mLab database. It receives the list of events as a prop from
// EventsMain and maps through them.

import React, { Component } from 'react';

class EventsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Events</h2>

        {this.props.data.map(function(o) {
            return (
              <div className="events" key={o._id}>

                <h4>{o.name}</h4>
                {o.date} <br />
                {o.location} <br />
                {o.time}
              </div>
            )
          }
        )}
      </div>
    );
  }
}

export default EventsList;
