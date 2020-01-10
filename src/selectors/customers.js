import { createSelector } from 'reselect';

export const getCustomers = state => state.customers;

export const getCustomerByDNI = createSelector(
    (state, dni) => state.customers.find(c => c.dni === dni),
    customer => customer
);