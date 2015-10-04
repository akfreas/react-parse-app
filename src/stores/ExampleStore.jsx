'use strict';

import Reflux from 'reflux';
import Actions from '../actions/Actions';

const example = {
    'key': 'value'
};

const ExampleStore = Reflux.createStore({
    listenables: [Actions],

    getInitialState() {
        return {example};
    }
});

export default ExampleStore;
