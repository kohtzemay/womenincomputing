// These are the three boxes that we see on the home page

import React, { Component } from 'react';
import $ from 'jquery';

import SubscriptionBox from './subscriptionBox';
import { API_EMAILS } from "../global";

class HomepageBoxes extends Component {
  render() {
    return (
      <div className="theGroup">
          {/*EventBox*/}
          <div className="boxComp">
            <h3>Regular Events</h3>

            <p><b>Homework Night | SB 337</b><br />
            Every two weeks, 6 - 8pm</p>

            <p><b>Girls Who Code | SB 337</b><br/ >
            Every Mon, Tues, Wed, 6 - 8pm</p>

            <a href="/events" className="boxLink">See our other events!</a>
          </div>

          {/*UpdateBox*/}
          <div className="boxComp">
            <h3>Updates</h3>
            <p>We haven't got any new big updates coming up, but we'll let you know!</p>
          </div>

          {/*Subscription Box, has the form added as well*/}
          <div className="boxComp">
            <h3>Subscribe</h3>
            <p>Want to receive emails about future events, job/internship opportunities, and
            other related news? Click on the link below to subscribe to our mailing list!
            No spam to your inbox, ever 🙅🏻</p>

            <a href="http://list.calvin.edu/mailman/listinfo/wic" target="_blank" className="boxLink">Subscribe here!</a>
          </div>
      </div>
    );
  }
}

export default HomepageBoxes;
