import { useEffect, useState } from "react";
import ReviewCard from "../review-card/ReviewCard.jsx";
import request from "../../utils/requester.js";

export default function GameReviewSection({id, setGameRating, setGameTime}) {
    const [reviews, setReviews] = useState([]);

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

    useEffect(() => {
        request(`/reviews/game/${id}`)
        .then(result => {
            setReviews(result);
            calculateAverageRatingAndTime(result);
        })
    }, [id])

    

    return (
        <div className="reviews-showcase">
            <h3 className="reviews-title">Player Reviews</h3>

            <div className="reviews-container">
                <ul className="review-list">
                    {
                    reviews.map(review => <ReviewCard 
                    key={review._id} 
                    id={review._id} 
                    popualatedData={review.user} {...review} />)
                    }
                    {reviews.length === 0 && <p className="section-title">There are no reviews yet...</p>}
                </ul>
            </div>
        </div>
    )
}