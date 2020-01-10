import {combineReducers} from "redux";
import customers from "./customers";
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    customers,
    form: formReducer
});