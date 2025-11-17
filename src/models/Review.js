import { Schema, model, Types } from "mongoose";

const reviewSchema = new Schema({
    game: {
        type: Types.ObjectId,
        ref: "Game",
        required: [true, "A game is required"]
    },
    user: {
        type: Types.ObjectId,
        ref: "User",
        required: [true, "A user is required"]
    },
    rating: {
        type: Number,
        min: [1, "Rating is too low"],
        max: [10, "Rating is too high"],
        required: [true, "A rating is required"]
    },
    playTime: {
        type: Number,
        min: [1, 'Play Time is too short'],
        required: [true, "Play time is required"]
    },
    thoughts: {
        type: String,
        minLength: [10, 'Review is too short'],
        required: [true, "Thoughts are required"]
    }
})

const Review = model('Review', reviewSchema);

export default Review;