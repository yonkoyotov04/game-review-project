import { createContext } from "react";

const UserContext = createContext({
    user: {},
    isAuthenticated: false,
    loginHandler() {},
    logoutHandler() {}
})

export default UserContext