import {createStore, combineReducers} from 'redux';

import rootReducers from '../reducers';
import middleware from '../utils/logger';

const configStore = (intitialState = {}) => {
    return createStore(
        rootReducers,
        middleware
    )
};

export default configStore;
