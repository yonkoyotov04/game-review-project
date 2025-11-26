import { useEffect, useState } from "react";
import ReviewCard from "../review-card/ReviewCard.jsx";
import request from "../../utils/requester.js";

export default function ProfileReviewSection({id}) {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        request(`/reviews/user/${id}`)
        .then(result => {
            setReviews(result);
        })
    }, [id])

    return (
        <div className="reviews-showcase">
            <h3 className="reviews-title">Player Reviews</h3>

            <div className="reviews-container">
                <ul className="review-list">
                    {reviews.map(review => <ReviewCard key={review._id} popualatedData={review.game} {...review} />)}
                    {reviews.length === 0 && <p className="section-title">There are no reviews yet...</p>}
                </ul>
            </div>
        </div>
    )
}