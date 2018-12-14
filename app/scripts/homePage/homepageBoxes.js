import React from 'react';
import $ from 'jquery';
import SubscriptionBox from './subscriptionBox';
import {API_EMAILS} from "../global";

{/*This creates the boxes on the homepage and makes sure they act relative to one anpther also handles
  the email submissions with ajax*/}

var HomepageBoxes = React.createClass({

handleEmailSubmit: function(email){
  var emails = this.state.data;
  email.id = Date.now();
  var newEmails = emails.concat([email]);
  this.setState({data: newEmails});
  $.ajax({
     url: API_EMAILS,
     dataType: 'json',
     type: 'POST',
     data: email,
     success:
     function(data) {
       this.setState({data: data});
       alert("Your Email has been submitted, thanks!");
     }.bind(this)
     ,
     error: function(xhr, status, err) {
       this.setState({data: emails});
       console.error(API_EMAILS, status, err.toString());
     }.bind(this)
   });
},
getInitialState:function(){
  return {data: []};
},

render:
function(){
  return(

<div className="theGroup">
{/*These are the three boxes that we see on the home page*/}
{/*EventBox*/}
    <div className="boxComp">
      <div className="head">Events Box</div>
      <div className="text">
      <div className="event-local"> Homework Night | SB340</div>
      Every two weeks, 6-8pm
      <div className="event-local"> Girls Who Code | SB340</div>
      Every Mon,Tues, Wed, 6-8pm
      </div>

    </div>
{/*UpdateBox*/}
    <div className="boxComp">
      <div className="head">Updates</div>
      <div className="text">
      We haven't got any new big updates coming up, but we'll let you know!
      </div>
    </div>
{/*Subscription Box, has the form added as well*/}
    <div className="boxComp">
      <div className="head">Subscription Box</div>
      <div className="text">
      Would you like to get email updates about what's new in Women in Computing?
      Leave your email below to subscribe to our newsletter!
      </div>
      <SubscriptionBox onEmailSubmit = {this.handleEmailSubmit} />
    </div>
</div>



);
}

});
module.exports = HomepageBoxes;
