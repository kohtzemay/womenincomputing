import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import MainContent from './homePage/mainContent';

import '../css/base.css';

ReactDOM.render((
        <Router history={browserHistory}>
            <Route path="/" component={MainContent}/>
        </Router>
    ), document.getElementById('content')
);
