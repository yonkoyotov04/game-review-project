import { Link } from "react-router";

export default function Categories() {
    return (
        <section className="categories">
            <h2 className="section-title">Browse by Category</h2>
            <div className="category-grid">
                <Link to="/games/Action">
                    <div className="category-card">
                        <div className="category-overlay">
                            <h3>Action</h3>
                        </div>
                    </div>
                </Link>
                <Link to="/games/Adventure">
                    <div className="category-card">
                        <div className="category-overlay">
                            <h3>Adventure</h3>
                        </div>
                    </div>
                </Link>
                <Link to="/games/RPG">
                    <div className="category-card">
                        <div className="category-overlay">
                            <h3>RPG</h3>
                        </div>
                    </div>
                </Link>
                <Link to="/games/Fighting">
                    <div className="category-card">
                        <div className="category-overlay">
                            <h3>Fighting</h3>
                        </div>
                    </div>
                </Link>
                <Link to="/games/FPS">
                    <div className="category-card">
                        <div className="category-overlay">
                            <h3>FPS</h3>
                        </div>
                    </div>
                </Link>
                <Link to="/games/Simulation">
                    <div className="category-card">
                        <div className="category-overlay">
                            <h3>Simulation</h3>
                        </div>
                    </div>
                </Link>
                <Link to="/games/Strategy">
                    <div className="category-card">
                        <div className="category-overlay">
                            <h3>Strategy</h3>
                        </div>
                    </div>
                </Link>
                <Link to="/games/Horror">
                    <div className="category-card">
                        <div className="category-overlay">
                            <h3>Horror</h3>
                        </div>
                    </div>
                </Link>
                <Link to="/games/Sports">
                    <div className="category-card">
                        <div className="category-overlay">
                            <h3>Sports</h3>
                        </div>
                    </div>
                </Link>
                <Link to="/games/Racing">
                    <div className="category-card">
                        <div className="category-overlay">
                            <h3>Racing</h3>
                        </div>
                    </div>
                </Link>
                <Link to="/games/Tactical">
                    <div className="category-card">
                        <div className="category-overlay">
                            <h3>Tactical</h3>
                        </div>
                    </div>
                </Link>
                <Link to="/games/MMO">
                    <div className="category-card">
                        <div className="category-overlay">
                            <h3>MMO</h3>
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    )
}