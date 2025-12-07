import { useContext } from "react";
import UserContext from "../contexts/UserContext.jsx";
import { Navigate, Outlet } from "react-router";

export default function AuthRoutes() {
    const { isAuthenticated } = useContext(UserContext);
    return isAuthenticated ? <Outlet/> : <Navigate to='/login'/>
}