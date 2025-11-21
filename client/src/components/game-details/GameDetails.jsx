import ReviewCard from "../review-card/Review-Card.jsx";

export default function GameDetails() {
    return (
        <section className="game-card">
            <h2 className="section-title">Game Overview</h2>

            <div className="game-card-container">
                <div className="game-image">
                    <img src="https://assets-prd.ignimgs.com/2025/04/02/nintendoswitch2-hollow-knight-silksong-keyart-square-1743636317910.jpg?crop=1%3A1%2Csmart&format=jpg&auto=webp&quality=80" alt="Game Cover" />
                </div>

                <div className="game-details">
                    <h3 className="game-title">Hollow Knight: Silksong</h3>
                    <p><strong>Developer:</strong> Team Cherry</p>
                    <p><strong>Genre:</strong> Adventure</p>
                    <p><strong>Release:</strong> 2025/09/04</p>
                    <p><strong>Platform:</strong> PC, PS5, Xbox Series X/S, Switch 2</p>
                    <p><strong>Description:</strong> Hollow Knight: Silksong is a Metroidvania action-adventure game where you play as Hornet,
                    an agile bug who is captured and taken to the strange kingdom of Pharloom.</p>

                    <div className="game-stats">
                        <p><strong>Rating:</strong> 9/10</p>
                        <p><strong>Average Time:</strong> 16 hours</p>
                    </div>
                </div>
            </div>

            
            <p className="basic-text">You already left a review!</p>
            <a href="/reviews/{{game.id}}/review"><button className="review-btn">Leave a Review</button></a>
            <p className="basic-text">You need to <a href="/auth/login">login</a> to leave a review!</p>

            <div className="reviews-showcase">
                <h3 className="reviews-title">Player Reviews</h3>

                <div className="reviews-container">
                    <ul className="review-list">
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                        <p className="section-title">There are no reviews yet...</p>
                    </ul>
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
            </div>
         
            <div className="game-actions">
                <a href="/games/{{game.id}}/edit"><button className="edit-btn">Edit Game</button></a>
                <a href="/games/{{game.id}}/delete"><button className="delete-btn">Delete Game</button></a>
            </div>
        </section>
    )
}