import { useParams, Link} from "react-router";
import { useContext, useEffect, useState, } from "react";
import request from "../../utils/requester.js";
import UserContext from "../../contexts/userContext.js";
import GameReviewSection from "../review-section/GameReviewSection.jsx";

export default function GameDetails() {
    const { gameId } = useParams();
    const [gameData, setGameData] = useState({});
    const [gameRating, setGameRating] = useState(0);
    const [gameTime, setGameTime] = useState(0);
    const { isAuthenticated, user } = useContext(UserContext);

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
                        <p><strong>Rating:</strong> {gameRating}/10</p>
                        <p><strong>Average Time:</strong> {gameTime} hours</p>
                    </div>
                </div>
            </div>

            {isAuthenticated ?
                <Link to={`reviews/${gameId}/review`}><button className="review-btn">Leave a Review</button></Link>
                : <p className="basic-text">You need to <Link to="/login">login</Link> to leave a review!</p>}
            <p className="basic-text">You already left a review!</p>



            <GameReviewSection id={gameId} setGameRating={setGameRating} setGameTime={setGameTime} />

            <div className="game-actions">
                <a href={`/games/${gameId}/edit`}><button className="edit-btn">Edit Game</button></a>
                <a href={`/games/${gameId}/delete`}><button className="delete-btn">Delete Game</button></a>
            </div>
        </section>
    )
}