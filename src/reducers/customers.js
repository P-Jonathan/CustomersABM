import { handleActions } from 'redux-actions';
import {
  FETCH_CUSTOMERS,
  UPDATE_CUSTOMER,
  INSERT_CUSTOMER,
  DELETE_CUSTOMER
} from "../constants";

const customers = handleActions({
  [FETCH_CUSTOMERS]: (state, action) => [...action.payload],
  [INSERT_CUSTOMER]: (state, action) => {
    const { id, name, dni, age } = action.payload;
    if (id && name && dni && age)
      return [...state, action.payload];
    else
      return state;
  },
  [UPDATE_CUSTOMER]: (state, action) => {
    const customer = action.payload;
    const { id } = customer;

    return state.reduce((acc, c) => {
      if (c.id === id)
        return [...acc, customer];
      else
        return [...acc, c];
    },
      []
    );
  },
  [DELETE_CUSTOMER]: (state, action) => state.filter(c => c.id !== action.payload)
},
  [] // Default state
);

export default customers;