import React, { Component } from 'react';
import $ from 'jquery';

import Navbar from '../navbar/navbar';
import eventList from './eventList.js';
import ReactDOM from 'react-dom';
import App from './App.jsx';

ReactDOM.render(<App/>, document.getElementById('app'));
import { API_OPPS, POLL_INTERVAL } from '../global';

import '../../css/event.css';



class EventsMain extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = {
         data: 'Initial data...'
      }
      this.updateState = this.updateState.bind(this);
   };
   updateState() {
      this.setState({data: 'Data updated...'})
   }
   render() {
      return (
         <div>
            <button onClick = {this.updateState}>CLICK</button>
            <a href={"calendar.html"} target="_blank"><div className="job-link"> Click for events Page </div></a>
            <h4>{this.state.data}</h4>
         </div>
      );
   }
}
export default EventsMain;
