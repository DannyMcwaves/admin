import {combineReducers} from 'redux';
import {loadReducer, usersReducer, userReducer} from './interfaces';
import {NOT_LOADING, LOADING, ADD_LOADED_USERS, UPDATE_CACHE, HAS_CACHE, USER} from './actions';


const loadStateReducer:loadReducer = (state = NOT_LOADING, action) => {
    switch(action.type) {
        case NOT_LOADING:
            return NOT_LOADING;
        case LOADING:
            return LOADING;
        default:
            return state
    }
};

const usersReducer:usersReducer = (state = [], action) => {
    switch(action.type) {
        case ADD_LOADED_USERS:
            return [...state, action.data];
        default:
            return state;
    }
};


const userReducer:userReducer = (state = {}, action) => {
    switch (action.type) {
        case USER:
            return action.data;
        default:
            return state
    }
};

export default combineReducers({loadState: loadStateReducer, users: usersReducer, user: userReducer });
