import { useParams } from "react-router";
import { useEffect, useState } from "react";
import request from "../../utils/requester.js";
import ReviewSection from "../review-section/reviewSection.jsx";

export default function GameDetails() {
    const { gameId } = useParams();
    const [gameData, setGameData] = useState({});
    const [gameReviews, setGameReviews] = useState([]);

    useEffect(() => {
        request(`/games/${gameId}/details`)
        .then(result => {
            setGameData(result.game);
            setGameReviews(result.reviews);
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

            <ReviewSection mode="game" id={gameId} />
         
            <div className="game-actions">
                <a href={`/games/${gameData._id}/edit`}><button className="edit-btn">Edit Game</button></a>
                <a href={`/games/${gameData._id}/delete`}><button className="delete-btn">Delete Game</button></a>
            </div>
        </section>
    )
}