// this are action constants the actions that are dispatched.
const LOADING:string = 'LOADING';
const NOT_LOADING:string = 'NOT_LOADING';
const UPDATE_CACHE:string = 'UPDATE_CACHE';
const ADD_LOADED_USERS:string = 'ADD_LOADED_USERS';
const HAS_CACHE:boolean = true; // this action is dispacthed when the user stats is properly loaded.
const HAS_NO_CACHE:boolean = false; // this is fired at the initial stage.
const USER:string = 'USER';

export {LOADING, NOT_LOADING, UPDATE_CACHE, ADD_LOADED_USERS, HAS_CACHE, HAS_NO_CACHE, USER};
