import {LoadAction, UserAction} from './interfaces';
import {LOADING, NOT_LOADING, UPDATE_CACHE, ADD_LOADED_USERS} from './actions';

const Loading:LoadAction = {type: LOADING};
const NotLoading:LoadAction = {type: NOT_LOADING};
const UpdateCache = (id, data):UserAction => ({type: UPDATE_CACHE, _id:id, data: data})
const AddLoadedUsers = (id, data):UserAction => ({type: ADD_LOADED_USERS, _id: id, data: data})

export {Loading, NotLoading, UpdateCache, AddLoadedUsers};
