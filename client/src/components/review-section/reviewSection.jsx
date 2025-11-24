import { useEffect, useState } from "react";
import ReviewCard from "../review-card/Review-Card.jsx";
import request from "../../utils/requester.js";

export default function ReviewSection({mode, id}) {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        request(`/reviews/${mode}/${id}`)
        .then(result => {
            setReviews(result);
        })
    }, [mode, id])

    return (
        <div className="reviews-showcase">
            <h3 className="reviews-title">Player Reviews</h3>

            <div className="reviews-container">
                <ul className="review-list">
                    {reviews.map(review => <ReviewCard key={review._id} mode={mode} popualatedData={review.user} {...review} />)}
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
    )
}