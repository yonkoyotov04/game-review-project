import { useContext, useState } from "react";
import ReviewCard from "../review-card/ReviewCard.jsx";
import ReviewContext from "../../contexts/ReviewContext.js";
import useFetch from "../../hooks/useFetch.js";

export default function GameReviewSection({id}) {
    const [reviews, setReviews] = useState([]);
    const { reviewStatusHandler, gameStatsHandler } = useContext(ReviewContext);

    useFetch(`/reviews/game/${id}`, setReviews, {gameStatsHandler, reviewStatusHandler})

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