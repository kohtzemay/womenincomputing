import React, { Component } from 'react';
import $ from 'jquery'; 

import '../../css/about.css';

class AboutMain extends Component {


    render() {
    return (
      <div class="about">About
      <div class="column">
                <h2>Who We Are</h2>
                <p>Women in Computing at Calvin College is a relatively new club created by alumni Lydia
                    Cupery, Paige Brinks, and Beka Agava as a way to connect and support women studying 
                    technology here at Calvin. But WIC isn't just for women--we encourage anyone interested 
                    to join us as we strive to make the STEM field a more inclusive and diverse 
                    place fo everyone. </p>
                <p>Some of the things we do as a club are: set up mentorship program for our members, 
                    tour local companies, homework nights in the lab, workshops, attend women in tech 
                    events and conferences. Subscribe to our mailing list to be the first to hear about
                    these events! </p>
      <h2>Leadership</h2>
      </div>
      <div class="column">
                <h2>Mission Statement</h2>
                <p>we aim to increase retention, competence, and confidence of women 
                    in technology at Calvin College by creating 
                    a sense of belonging in community and providing 
                    opportunities to further develop technical skills. </p> 
                <p>AlumniSection</p>
                <h2>Goals</h2>
                <ul>
                    <li> Community with women in CS </li>
                    <li> Interact with local CS companies (tours, speakers) </li>
                    <li> Conferences (GH, MICWIC) </li>
                    <li> CS Projects </li>
                </ul>
      </div> 
      </div>
    );
    }
}

export default AboutMain;
