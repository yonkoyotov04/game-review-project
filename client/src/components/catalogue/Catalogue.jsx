import GameCard from "../gameCard/GameCard.jsx";

export default function Catalogue() {
    return (
        <section className="games-list">
            <h2 className="section-title">All Games</h2>

            <div className="search-bar">
                <form method="GET">
                    <input type="text" id="gameSearch" name="title" value="" placeholder="Search for a game..." />
                    <button type="submit" className="search-btn">Search</button>
                </form>
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
                <p className="section-title">There are no games yet...</p>
            </div>

            <div className="reviews-pagination">
                <button className="page-btn prev">← Previous</button>
                <div className="page-numbers">
                    <button className="page-number active">1</button>
                    <button className="page-number">2</button>
                    <button className="page-number">3</button>
                </div>
                <button className="page-btn next">Next →</button>
            </div>
        </section>
    )
}