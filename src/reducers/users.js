import { CUSTOMER_LIST, CUSTOMER_VIEW, CUSTOMER_EDIT } from "../constants/permissions";

const users = (state, action) => ({
    permissions: [CUSTOMER_LIST, CUSTOMER_VIEW, CUSTOMER_EDIT]
});

export default users;