import { useContext, useEffect, useState } from "react";
import ReviewCard from "../review-card/ReviewCard.jsx";
import request from "../../utils/requester.js";
import ReviewContext from "../../contexts/ReviewContext.js";
import UserContext from "../../contexts/UserContext.js";

export default function GameReviewSection({id}) {
    const [reviews, setReviews] = useState([]);
    const {user} = useContext(UserContext);
    const { reviewStatusHandler, gameStatsHandler } = useContext(ReviewContext);

    useEffect(() => {
        request(`/reviews/game/${id}`)
            .then(result => {
                setReviews(result);
                gameStatsHandler(result);
                if (result.some(review => review.user._id === user?._id)) {
                    reviewStatusHandler()
                }
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