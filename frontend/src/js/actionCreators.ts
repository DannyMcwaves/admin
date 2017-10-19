import {LoadAction, UserAction} from './interfaces';
import {LOADING, NOT_LOADING, UPDATE_CACHE, ADD_LOADED_USERS, USER} from './actions';

const Loading:LoadAction = {type: LOADING};
const NotLoading:LoadAction = {type: NOT_LOADING};
const AddLoadedUsers = (id, data):UserAction => ({type: ADD_LOADED_USERS, _id: id, data: data});

const getDataAndDispatch = ($, url, data, history) => (dispatch) => {
    dispatch(Loading);
    return $.post({ url: url, data: data, dataType: 'json' }).done((data) => {
        dispatch({type: USER, data: data});
        history.push('/users');
    }).fail(err => {
        console.log(err.responseJSON);
    }).always(_ => {
        dispatch(NotLoading);
    });
};

const dispatchSignout = ($, url, history) => (dispatch) => {
    dispatch(Loading);
    $.get(url).done(data => {
        dispatch({type: USER, data: {}});
        history.push(data.path);
    }).fail(err => {
        console.log(err.responseJSON);
    })
};

export { AddLoadedUsers, dispatchSignout, getDataAndDispatch };
