import {Store} from "./interfaces";
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import appState from './reducers';


// this is the initial state of the store.
let initialState: Store = {
    loadState: 'NOT_LOADING',
    user: {},
    users: []
};

// initializing the store with the initial state and the thunk middleware for handling dispatched functions.
let store = createStore(appState, initialState, applyMiddleware(thunkMiddleware, logger));

export default store;