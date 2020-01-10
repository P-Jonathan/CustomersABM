import {createStore, applyMiddleware, compose} from "redux";
import promiseMiddleware from 'redux-promise';
import reducers from './../reducers';

const initialState = {};
// noinspection JSUnresolvedVariable
const composeEhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, initialState, composeEhancer(applyMiddleware(promiseMiddleware)));

export default store;