import { useContext } from "react"
import { Link } from "react-router"
import UserContext, { getProfileData } from "../../contexts/UserContext.jsx"

export default function Header() {
    const { isAuthenticated, user, logoutHandler } = useContext(UserContext);
    let profileData = {};

    if (isAuthenticated) {
        profileData = getProfileData(user?._id);
    }

    return (
        <nav id="navbar" >
            <Link to="/" className="logo-link">
                <span className="logo-text">CyberCritic</span>
            </Link>
            <div className="nav-container">
                <ul className="nav-links" id="navLinks">
                    <li><Link to="/" className="nav-link">Home</Link></li>
                    <li><Link to="/games" className="nav-link">Catalogue</Link></li>
                    {isAuthenticated ? (
                        <>
                            <li><Link to="/games/create" className="nav-link">Add Game</Link></li>
                            <li><Link to={'/'} onClick={logoutHandler} className="nav-link">Logout</Link></li>
                        </>

                    ) : (
                        <>
                            <li><Link to="/login" className="nav-link">Login</Link></li>
                            <li><Link to="/register" className="nav-link">Register</Link></li>
                        </>
                    )}
                    <li><Link to="/about" className="nav-link">About</Link></li>
                </ul>
            </div>
            {isAuthenticated ? (<div className="nav-user">
                <span>
                    {profileData.username}
                </span>
                <span><Link to={`/profile/${user?._id}`}>
                    <img src={profileData.profilePic}
                        alt="image" className="game-icon" />
                </Link></span>
            </div>) : ""}
        </nav>
    )
}