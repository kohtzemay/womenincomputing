import React from 'react';
import ReactDOM from 'react-DOM';

{/*Creates the Form for the homepage's subscription box it sends the data to
the database so we can track who is on the email list and who isn't*/}


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
        <label className="home" htmlFor= "name-text">Name</label>
        <input
        className = "inputBox"
          type="text"
          name="name"
          placeholder="Enter your Name"
          value={this.state.name}
          onChange={this.handleNameChange}
          required
        />
      </div>

      <div className="input-field">
        <label className="home" htmlFor="email-text">Email</label>
        <input
        className = "inputBox"
          type="email"
          name="email"
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
