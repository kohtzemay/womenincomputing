import React, { Component } from 'react';

class OpportunitiesList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.data);
    return (
      <div>
        {this.props.data.map(function(o) {
          return (
            <div key={o._id}>
              {o.title} <br />
              {o.companyName} <br />
              {o.location} <br />
              {o.description}
            </div>
          )
        })}
      </div>
    );
  }

}

export default OpportunitiesList;
