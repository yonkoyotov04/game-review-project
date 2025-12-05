import { Link } from "react-router";

export default function NotFound() {
    return (
        <section className="error-404-container">
            <h1 className="error-404-title">404</h1>
            <p className="error-404-message">The page you're looking for does not exist.</p>

            <Link to="/" className="error-404-btn">Return to Home</Link>
        </section>
    )
}