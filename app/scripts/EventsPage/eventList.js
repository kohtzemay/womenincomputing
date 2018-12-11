import React, { Component } from 'react';

class EventsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div> 
        {this.props.data.map(function(o) {
          if (o.type == "internship") {
            return (
              <div className="job" key={o._id}>
                <a href={o.link} target="_blank"><div className="job-link">Apply Externally</div></a>
                <h4>{o.title}</h4>
                {o.companyName} <br />
                {o.location} <br />
                <br />
                {o.description}
              </div>
            )
          }
        })}

        <h2>Jobs</h2>
        {this.props.data.map(function(o) {
          if (o.type == "job") {
            return (
              <div className="job" key={o._id}>
                <a href={o.link} target="_blank"><div className="job-link">Apply Externally</div></a>
                <h4>{o.title}</h4>
                {o.companyName} <br />
                {o.location} <br />
                <br />
                {o.description}
              </div>
            )
          }
        })}
      </div>
    );
  }

}


export default EventsList;