import { handleActions } from 'redux-actions';
import {
  FETCH_CUSTOMERS,
  UPDATE_CUSTOMER,
  INSERT_CUSTOMER
} from "../constants";

const customers = handleActions({
  [FETCH_CUSTOMERS]: (state, action) => [...action.payload],
  [INSERT_CUSTOMER]: (state, action) => [...state, action.payload],
  [UPDATE_CUSTOMER]: (state, action) => {
    const customer = action.payload;
    const { id } = customer;

    return state.reduce((acc, c) =>
      [...acc, c.id === id ? customer : c],
      []
    );
  },
},
  [] // Default state
);

export default customers;