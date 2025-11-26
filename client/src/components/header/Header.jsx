import { useContext } from "react"
import { Link } from "react-router"
import UserContext from "../../contexts/userContext.js"

export default function Header() {
    const { isAuthenticated, user } = useContext(UserContext);

    return (
        <nav id="navbar" >
            <div className="nav-container">
                <Link to="/" className="logo-link">
                    <span className="logo-text">Game Review</span>
                </a>
                <ul className="nav-links" id="navLinks">
                    <li><Link to="/" className="nav-link">Home</Link></li>
                    <li><Link to="/games" className="nav-link">Catalogue</Link></li>
                    {isAuthenticated ? (
                        <>
                            <li><Link to="/games/create" className="nav-link">Add Game</Link></li>
                            <li><Link to="/profile" className="nav-link">Profile</Link></li>
                            <li><Link onClick={logoutHandler} className="nav-link">Logout</Link></li>
                        </>

                    ) : (
                        <>
                            <li><Link to="/login" className="nav-link">Login</Link></li>
                            <li><Link to="/register" className="nav-link">Register</Link></li>
                        </>
                    )}
                    <li><Link to="/about" className="nav-link">About</Link></li>
                    {isAuthenticated ? (<li className="nav-link">{user.email}</li>) : ""}
                </ul>
            </div>
        </nav>
    )
}