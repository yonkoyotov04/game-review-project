import { useContext } from "react";
import UserContext from "../contexts/UserContext.js";
import { Navigate, Outlet } from "react-router";

export default function GuardedRoutes() {
    const { isAuthenticated } = useContext(UserContext);
    return isAuthenticated ? <Outlet/> : <Navigate to='/login'/>
}