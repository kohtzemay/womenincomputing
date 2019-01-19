//This file contains data for about page
import React, { Component } from 'react';

import Navbar from '../navbar/navbar';

class AboutMain extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <div className="page">
          <h1>About</h1>

          <div className="main-content">

            <div className="column-one">
              <h2>Who We Are</h2>
              <p>
                <b>Women in Computing</b> at Calvin College is a relatively new club created by alumni Lydia
                Cupery, Paige Brinks, and Beka Agava, as a way to connect and support women studying
                technology here at Calvin. But WIC isn't just for women — we encourage anyone interested
                to join us as we strive to make the STEM field a more inclusive and diverse
                place fo everyone.
              </p>
              <p>
                Some of the things we do as a club are: set up mentorship programs for our members,
                tour local companies, host homework nights and workshops, and attend women in tech
                events and conferences. Subscribe to our mailing list to be the first to hear about
                these events!
              </p>

              <h2>Leadership</h2>
              <div id="leadership">
                <div className="row">
                  <div className="person">
                    <img className="dp" src={require('img/ziqi.jpg')} />
                      <div className="description">
                        <b>Ziqi Chen, President</b><br />
                        Graduating '19<br />
                      </div>
                  </div>

                  <div className="person">
                    <img className="dp" src={require('img/sarah.jpg')} />
                      <div className="description">
                        <b>Sarah Samuel, VP + Treasurer</b><br />
                        Graduating '20<br />
                      </div>
                  </div>
                </div>

                <div className="row">
                  <div className="person">
                    <img className="dp" src={require('img/lauren.jpg')} />
                      <div className="description">
                        <b>Lauren Ebels, Recruitment + Retention</b><br />
                        Graduating '20<br />
                      </div>
                  </div>

                  <div className="person">
                    <img className="dp" src={require('img/megan.jpg')} />
                      <div className="description">
                        <b>Megan Koh, Publicity Coordinator</b><br />
                        Graduating '19<br />
                      </div>
                  </div>
                </div>

                <div className="row">
                  <div className="person">
                    <img className="dp" src={require('img/judy.jpg')} />
                      <div className="description">
                        <b>Judy Kwon, Events Coordinator</b><br />
                        Graduating '19<br />
                      </div>
                  </div>

                  <div className="person">
                    <img className="dp" src={require('img/catherine.jpg')} />
                      <div className="description">
                        <b>Catherine DeJager, Mentorship Coordinator</b><br />
                        Graduating '20<br />
                      </div>
                  </div>
                </div>

                <div className="person">
                  <img className="dp" src={require('img/joel.png')} />
                    <div className="description">
                      <b>Joel Adams, Mentor</b><br />
                      Computer Science Dept.<br />
                    </div>
                </div>

              </div>
            </div>

            <div className="column-two">
              <div className="boxComp">
                <h2>Mission Statement</h2>
                <p>We aim to increase retention, competence, and confidence of women
                    in technology at Calvin College by creating
                    a sense of belonging in community and providing
                    opportunities to further develop technical skills. </p>
              </div>

              <div className="boxComp">
                <h2>Goals</h2>
                <ul>
                  <li> Build community with women in CS </li>
                  <li> Interact with local CS companies (tours, speakers) </li>
                  <li> Conferences (GHC, MICWIC) </li>
                  <li> CS Projects </li>
                </ul>
              </div>
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default AboutMain;
