import { useState } from "react";
import ReviewCard from "../review-card/ReviewCard.jsx";
import useFetch from "../../hooks/useFetch.js";

export default function ProfileReviewSection({id}) {
    const [reviews, setReviews] = useState([]);

    const {refresher} = useFetch(`/reviews/user/${id}`, setReviews)

    return (
        <div className="reviews-showcase">
            <h3 className="reviews-title">Player Reviews</h3>

            <div className="reviews-container">
                <ul className="review-list">
                    {reviews.map(review => <ReviewCard key={review._id} refresher={refresher} popualatedData={review.game} {...review} />)}
                    {reviews.length === 0 && <p className="section-title">There are no reviews yet...</p>}
                </ul>
            </div>
        </div>
    )
}