import {combineReducers} from "redux";
import customers from "./customers";
import users from './users';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    user: users,
    customers,
    form: formReducer
});