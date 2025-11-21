import GameCard from "../gameCard/GameCard.jsx";

export default function Home() {

    return (
        <>
            <section className="popular-games">
                <div className="popular-games-header">
                    <h2 className="section-title">Most Popular Games</h2>
                </div>
                <div className="square-game-grid">
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <p className="section-title">There are no games yet...</p>
                </div>
            </section>

            <section className="categories">
                <h2 className="section-title">Browse by Category</h2>
                <div className="category-grid">
                    <a href="/games/action">
                        <div className="category-card">
                            <div className="category-overlay">
                                <h3>Action</h3>
                            </div>
                        </div>
                    </a>
                    <a href="/games/adventure">
                        <div className="category-card">
                            <div className="category-overlay">
                                <h3>Adventure</h3>
                            </div>
                        </div>
                    </a>
                    <a href="/games/rpg">
                        <div className="category-card">
                            <div className="category-overlay">
                                <h3>RPG</h3>
                            </div>
                        </div>
                    </a>
                    <a href="/games/fighting">
                        <div className="category-card">
                            <div className="category-overlay">
                                <h3>Fighting</h3>
                            </div>
                        </div>
                    </a>
                    <a href="/games/fps">
                        <div className="category-card">
                            <div className="category-overlay">
                                <h3>FPS</h3>
                            </div>
                        </div>
                    </a>
                    <a href="/games/simulation">
                        <div className="category-card">
                            <div className="category-overlay">
                                <h3>Simulation</h3>
                            </div>
                        </div>
                    </a>
                    <a href="/games/strategy">
                        <div className="category-card">
                            <div className="category-overlay">
                                <h3>Strategy</h3>
                            </div>
                        </div>
                    </a>
                    <a href="/games/horror">
                        <div className="category-card">
                            <div className="category-overlay">
                                <h3>Horror</h3>
                            </div>
                        </div>
                    </a>
                    <a href="/games/sports">
                        <div className="category-card">
                            <div className="category-overlay">
                                <h3>Sports</h3>
                            </div>
                        </div>
                    </a>
                    <a href="/games/racing">
                        <div className="category-card">
                            <div className="category-overlay">
                                <h3>Racing</h3>
                            </div>
                        </div>
                    </a>
                    <a href="/games/tactical">
                        <div className="category-card">
                            <div className="category-overlay">
                                <h3>Tactical</h3>
                            </div>
                        </div>
                    </a>
                    <a href="/games/mmo">
                        <div className="category-card">
                            <div className="category-overlay">
                                <h3>MMO</h3>
                            </div>
                        </div>
                    </a>
                </div>
            </section>
        </>
    )
}