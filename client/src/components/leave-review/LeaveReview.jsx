import { useNavigate, useParams } from "react-router"
import useControlledForm from "../../hooks/useControlledForm.js"
import { useContext, useState, useEffect } from "react";
import UserContext from "../../contexts/UserContext.js";
import request from "../../utils/requester.js";

export default function LeaveReview({ editMode }) {
    const { gameId } = useParams();
    const { reviewId } = useParams();
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    const data = {
        rating: 0,
        playTime: 0,
        thoughts: ''
    }

    const [initialValues, setInitialValues] = useState(data);

    useEffect(() => {
        if (editMode) {
            request(`/reviews/${reviewId}`)
                .then(result => {
                    setInitialValues({ ...result });
                });
        }
    }, [gameId, editMode])

    const onSubmit = async (values) => {
        const data = { ...values, user: user?._id };

        if (editMode) {
            request(`/reviews/${reviewId}/edit`, 'PUT', data)
                .finally(() => {
                    navigate(`/profile/${user?._id}`);
                });

        } else {
            request(`/reviews/${gameId}`, 'POST', data)
                .finally(() => {
                    navigate(`/games/${gameId}/details`);
                });
            ;
        }
    }

    const { values, changeHandler, submitHandler } = useControlledForm(initialValues, onSubmit)

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
                    <button type="submit" className="submit-btn">{editMode ? "Update" : 'Post'}</button>
                </form>
            </div>
        </section>
    )
}