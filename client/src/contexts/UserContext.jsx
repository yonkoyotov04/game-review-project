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

    const contextValues = {
        user,
        isAuthenticated: !!user?.email,
        isAdmin: user?._id === '69173291beba34c5fc2f9c04' ? true : false,
        loginHandler: onLogin,
        logoutHandler: onLogout
    }

    return (
        <UserContext.Provider value={contextValues}>
            {children}
        </UserContext.Provider>
    )
}

export function getProfileData(userId) {
    const [profileData, setProfileData] = useState({});

    useFetch(`/auth/${userId}`, setProfileData)

    return profileData;
}

export default UserContext;