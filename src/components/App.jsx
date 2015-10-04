'use strict';

import 'debug';
import React from 'react';
import Router from 'react-router';
import { ButtonLink } from 'react-router-bootstrap';

const RouteHandler = Router.RouteHandler;

class App extends React.Component {

    render() {
        return (
            <div>
                <h1>React+Parse App</h1>
                <ButtonLink to="/images" bsSize="large" bsStyle="success">Images</ButtonLink>
                <RouteHandler />
            </div>
        );
    }

}

export default App;
