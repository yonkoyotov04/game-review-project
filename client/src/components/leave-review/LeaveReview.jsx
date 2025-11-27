import { useNavigate, useParams } from "react-router"
import useControlledForm from "../../hooks/useControlledForm.js"
import { useContext } from "react";
import UserContext from "../../contexts/userContext.js";
import request from "../../utils/requester.js";

export default function LeaveReview() {
    const {gameId} = useParams();
    const {user} = useContext(UserContext);
    const navigate = useNavigate();

    const initialValues = {
        rating: 0,
        playTime: 0,
        thoughts: ''
    }

    const onSubmit = async(values) => {
        const data = {...values, user: user?._id};

        request(`/reviews/${gameId}`, 'POST', data);

        navigate(`/games/${gameId}/details`);
    }

    const {values, changeHandler, submitHandler} = useControlledForm(initialValues, onSubmit)

    return (
        <section id="leave-review">
            <div className="review-form">
                <h3 className="form-title">Leave a Review</h3>
                <form id="reviewForm" method="POST" onSubmit={submitHandler}>
                    <div className="form-group">
                        <label htmlFor="rating">Rating (From 1 to 10)</label>
                        <input type="number" id="rating" name="rating" onChange={changeHandler} value={values.rating} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="playTime">Time to finish (in hours)</label>
                        <input type="number" id="playTime" name="playTime" onChange={changeHandler} value={values.playTime} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="thoughts">Thoughts:</label>
                        <textarea name="thoughts" id="thoughts" onChange={changeHandler} value={values.thoughts} required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Post</button>
                </form>
            </div>
        </section>
    )
}