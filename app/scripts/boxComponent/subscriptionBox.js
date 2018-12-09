import React from 'react';
import ReactDOM from 'react-DOM';

var subscriptionBox = React.createClass({
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

      <input
      type="text" placeHolder= "Enter your first and last name" value={this.state.name}
      onChange={this.handleNameChange}
      />

      <input
      type="text" placeHolder="Enter your email" value={this.state.email}
      onChange={this.handleEmailChange}
      />

      <input type="submit" value="Post"/>
      </form>

    );
  }




});

module.exports = subscriptionBox;
