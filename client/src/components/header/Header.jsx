import { Link } from "react-router"

export default function Header() {
    return (
        <nav id="navbar" >
            <div className="nav-container">
                {/* <a href="/" className="logo-link">
                    <svg className="logo-svg" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style="stop-color:#FF5E00;stop-opacity:1" />
                                <stop offset="100%" style="stop-color:#00B2FF;stop-opacity:1" />
                            </linearGradient>
                        </defs>
                        <polygon points="20,2 38,14 38,26 20,38 2,26 2,14" fill="none" stroke="url(#logoGradient)"
                            stroke-width="2" />
                        <polygon points="20,8 32,16 32,24 20,32 8,24 8,16" fill="url(#logoGradient)" opacity="0.3" />
                        <circle cx="20" cy="20" r="3" fill="url(#logoGradient)" />
                    </svg>
                    <span className="logo-text">Game Review</span>
                </a> */}
                <ul className="nav-links" id="navLinks">
                    <li><Link to="/" className="nav-link">Home</Link></li>
                    <li><Link to="/games" className="nav-link">Catalogue</Link></li>
                    <li><Link to="/games/create" className="nav-link">Add Game</Link></li>
                    <li><Link to="/profile" className="nav-link">Profile</Link></li>
                    <li><Link to="/logout" className="nav-link">Logout</Link></li>
                    <li><Link to="/login" className="nav-link">Login</Link></li>
                    <li><Link to="/register" className="nav-link">Register</Link></li>
                    <li><Link to="/about" className="nav-link">About</Link></li>
                </ul>
            </div>
        </nav>
    )
}