import auth0 from 'auth0-js';
import history from './history';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'wic-users.auth0.com',
    clientID: 'zfZNAxyigFqFXAGo7FRKLeBCi2CeYSal',
    redirectUri: 'http://localhost:3000/callback',
    responseType: 'token id_token',
    audience: 'https://wic-users.auth0.com/api/v2/',
    scope: 'openid profile read:current_user'
  });

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.setSession = this.setSession.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getIdToken = this.getIdToken.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        history.replace('/dashboard');
      } else if (err) {
        history.replace('/');
        console.log(err);
      }
    });
  }

  // Sets user details in localStorage
  setSession(authResult) {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    // navigate to the home route
    history.replace('/dashboard');
  }

  // removes user details from localStorage
  logout() {
    // Remove tokens and expiry time
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('userProfile');

    // Remove isLoggedIn flag from localStorage
    localStorage.removeItem('isLoggedIn');

    // navigate to the home route
    history.replace('/');
  }

  // checks if the user is authenticated
  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  getAccessToken() {
    return localStorage.getItem('access_token');
  }

  getIdToken() {
    return localStorage.getItem('id_token');
  }

  getProfile(cb) {
  this.auth0.client.userInfo(localStorage.getItem('access_token'), (err, profile) => {
    if (profile) {
      localStorage.setItem('userProfile', profile)
    }
    cb(err, profile);
  });
}
};
