// EventsList is the component that lists out all the available opportunities
// pulled from the mLab database. It receives the list of events as a prop from
// EventsMain and maps through them, sorting the events 
// based on the "name" key. 

import React, { Component } from 'react';

class EventList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Events</h2>

        {this.props.data.map(function(o) {
            return (
              <div className="Events" key={o._id}>

                <h4>{o.name}</h4>
                {o.date} <br />
                {o.location} <br />
                <br />
                {o.time}
              </div>
            )
          }
        )}
      </div>
    );
  }

}

export default EventList;
