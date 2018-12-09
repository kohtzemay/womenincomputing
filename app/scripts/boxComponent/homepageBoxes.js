import React from 'react';
import ReactDOM from 'react-DOM';

import subscriptionBox from './subscriptionBox';

var homepageBoxes = React.createClass({

handleEmailSubmit: function(email){
  var emails = this.state.data;
  email.id = Date.now();
  var newEmails = emails.concat([email]);
  this.setState({data: newEmails});
  $.ajax({
     url: this.props.url,
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
       console.error(this.props.url, status, err.toString());
     }.bind(this)
   });
},
getInitialState:funciton(){
  return {data: []};
},

render:
function(){
  return(

<div id="theGroup">

    <div id="boxComp">
      <header class="head">Subscription Box</header>
      <text class="text">
      Hey tis is a test that this box thing renders
      </text>
      <subscriptionBox onEmailSubmit = {this.handleEmailSubmit} />
    </div>

    <div id="boxComp">
      <header class="head">Events Box</header>
      <text class="text">
      Hey tis is a test that this box thing with the whole flex thing doin gthe thign right
      </text>
    </div>

    <div id="boxComp">
      <header class="head">Updates</header>
      <text class="text">Hey tis is a test that this box thing with the whole flex thing doin gthe thign right
      </text>
    </div>

</div>
);
}

});
module.exports = homepageBoxes;
