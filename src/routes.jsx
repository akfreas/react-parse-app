'use strict';

import React from 'react';
import Router from 'react-router';
import Parse from 'parse';
import App from './components/App';
import ImageTest from './components/ImageTest';

const Route = Router.Route;
const DefaultRoute = Router.DefaultRoute;

const routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="images" path="/images" handler={ImageTest}/>
        <DefaultRoute handler={ImageTest}/>
    </Route>
);

// Initialize Parse
Parse.initialize('waBz8FEHBaQTQTzHT9ny26ucoDRmb9L3iRRGNUzA', 'qMXZz8678ucLOrwMwqQ53wA1vWMQULy1qit96u1F');

Router.run(routes, Router.HistoryLocation, (Handler) => {
    React.render(<Handler/>, document.getElementById('app'));
});
