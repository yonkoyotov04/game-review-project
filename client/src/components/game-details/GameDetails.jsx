import { useParams, Link } from "react-router";
import { useContext, useState, } from "react";
import UserContext from "../../contexts/UserContext.jsx";
import GameReviewSection from "../review-section/GameReviewSection.jsx";
import ReviewContext from "../../contexts/ReviewContext.js";
import useDelete from "../../hooks/useDelete.jsx";
import useFetch from "../../hooks/useFetch.js";

export default function GameDetails() {
    const { gameId } = useParams();
    const [gameData, setGameData] = useState({});
    const [gameRating, setGameRating] = useState(0);
    const [gameTime, setGameTime] = useState(0);
    const [hasLeftReview, setHasLeftReview] = useState(false);
    const { isAuthenticated, isAdmin, user } = useContext(UserContext);
    let isOwner = false;

    if (gameData.ownerId === user?._id) {
        isOwner = true;
    }

    const calculateAverageRatingAndTime = (reviews) => {
            let gameRatingAvg = 0;
            let gameTimeAvg = 0;
    
            if (reviews.length === 0) {
                return;
            }
    
            reviews.forEach(review => {
                gameRatingAvg += review.rating;
                gameTimeAvg += review.playTime;
            })
    
            gameRatingAvg = (gameRatingAvg / reviews.length).toFixed(1);
            gameTimeAvg = (gameTimeAvg / reviews.length).toFixed(1);
    
            setGameRating(gameRatingAvg);
            setGameTime(gameTimeAvg);
    }

    const { DeleteBox, onDeleteClick } = useDelete('game', gameData._id, gameData.title);
    useFetch(`/games/${gameId}`, setGameData);

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
                        <p><strong>Rating: </strong> 
                        <span className={gameRating > 0 && gameRating < 4 ? 'negative-score' 
                        : gameRating > 4 && gameRating < 8 ? 'mixed-score' 
                        : gameRating > 7 && gameRating <= 10 ? 'positive-score' 
                        : ''}>{gameRating}</span> / <span className="positive-score">10</span></p>
                        <p><strong>Average Time:</strong> {gameTime} hours</p>
                    </div>
                </div>
            </div>

            {isAuthenticated ? (hasLeftReview 
            ?  <p className="basic-text">You already left a review!</p>
            : <Link to={`/games/${gameId}/review`} className="link"><button className="review-btn">Leave a Review</button></Link>)
            : <p className="basic-text">You need to <Link to="/login">login</Link> to leave a review!</p> }
            
            <ReviewContext.Provider 
            value={
                { reviewStatusHandler: () => { setHasLeftReview(true) },
                gameStatsHandler: calculateAverageRatingAndTime }
                }>
                <GameReviewSection id={gameId} />
            </ReviewContext.Provider>

            {DeleteBox}

            {isOwner || isAdmin ? (
                <div className="game-actions">
                    <Link to={`/games/${gameId}/edit`}><button className="edit-btn">Edit Game</button></Link>
                    <button onClick={onDeleteClick} className="delete-btn">Delete Game</button>
                </div>
            ) : ''}
        </section>
    )
}