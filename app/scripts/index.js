import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import HomeMain from './homePage/homeMain';
import AboutMain from './aboutPage/aboutMain';
import '../css/base.css';

ReactDOM.render((
        <Router history={browserHistory}>
            <Route path="/" component={HomeMain}/>
            <Route path="/about" component={AboutMain}/>
        </Router>
    ), document.getElementById('content')
);
