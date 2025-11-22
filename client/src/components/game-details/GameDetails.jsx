import { useParams } from "react-router";
import ReviewCard from "../review-card/Review-Card.jsx";
import { useEffect, useState } from "react";
import request from "../../utils/requester.js";

export default function GameDetails() {
    const { gameId } = useParams();
    const [gameData, setGameData] = useState({});

    useEffect(() => {
        request(`/games/${gameId}/details`)
        .then(result => {
            setGameData(result);
        })
        .catch(err => alert(err.message))
    }, [])


    return (
        <section className="game-card">
            <h2 className="section-title">Game Overview</h2>

            <div className="game-card-container">
                <div className="game-image">
                    <img src={gameData.imageUrl} />
                </div>

                <div className="game-details">
                    <h3 className="game-title">{gameData.title}</h3>
                    <p><strong>Developers:</strong> {gameData.developers}</p>
                    <p><strong>Genre:</strong> {gameData.genre}</p>
                    <p><strong>Release:</strong> {gameData.relDate}</p>
                    <p><strong>Platforms:</strong> {gameData.platforms}</p>
                    <p><strong>Description:</strong> {gameData.description}</p>

                    <div className="game-stats">
                        <p><strong>Rating:</strong> 9/10</p>
                        <p><strong>Average Time:</strong> 16 hours</p>
                    </div>
                </div>
            </div>

            
            <p className="basic-text">You already left a review!</p>
            <a href={`reviews/${gameData._id}/review`}><button className="review-btn">Leave a Review</button></a>
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
                <a href={`/games/${gameData._id}/edit`}><button className="edit-btn">Edit Game</button></a>
                <a href={`/games/${gameData._id}/delete`}><button className="delete-btn">Delete Game</button></a>
            </div>
        </section>
    )
}