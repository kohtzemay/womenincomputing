import React from 'react';
import ReactDOM from 'react-DOM';

var SubscriptionBox = React.createClass({
  getInitialState:
  function() {
    return {name: '', email: ''};
  },

  handleEmailChange:
  function(e){
    this.setState({
      email: e.target.value});
    },
  handleNameChange:
  function(e){
    this.setState({
      name: e.target.value});
    },

  handleSubmit:
  function(e){
    e.preventDefault();
    var email = this.state.email.trim();
    var name = this.state.name.trim();
    if (!email || !name){
      return;
    }
    this.props.onEmailSubmit({
      name: name,
      email: email
    });
    this.setState({name: '', email: ''});
  },
  render:
  function(){
    return(
      <form className="emailForm" onSubmit={this.handleSubmit}>

      <div className="input-field">
        <label for= "name-text">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your Name"
          value={this.state.name}
          onChange={this.handleNameChange}
          required
        />
      </div>

      <div className="input-field">
        <label for="email-text">Email</label>
        <input
          type="text"
          placeholder="Enter your email"
          value={this.state.email}
          onChange={this.handleEmailChange}
          required
        />
      </div>

      <input className="theButton" type="submit" value="Post"/>
      </form>


    );
  }




});

module.exports = SubscriptionBox;
