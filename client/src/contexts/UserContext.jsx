import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage.js";
import useFetch from "../hooks/useFetch.js";

const UserContext = createContext({
    user: {},
    isAuthenticated: false,
    isAdmin: false,
    loginHandler() { },
    logoutHandler() { }
})

export function UserProvider({ children }) {
    const [user, setUser] = useLocalStorage(null, 'user');

    const onLogin = (user) => {
        setUser(user);
    }

    const onLogout = () => {
        setUser(null);
    }

    const updateUser = (editedFields) => {
        setUser({...user, ...editedFields});
    }

    const contextValues = {
        user,
        isAuthenticated: !!user?.email,
        isAdmin: user?._id === '69173291beba34c5fc2f9c04' ? true : false,
        updateUser: updateUser,
        loginHandler: onLogin,
        logoutHandler: onLogout
    }

    return (
        <UserContext.Provider value={contextValues}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;