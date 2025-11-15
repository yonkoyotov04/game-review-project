import { Schema, model, Types } from "mongoose";

const reviewSchema = new Schema({
    gameId: {
        type: Types.ObjectId,
        required: [true, "A game is required"]
    },
    userId: {
        type: Types.ObjectId,
        required: [true, "A user is required"]
    },
    rating: {
        type: Number,
        required: [true, "A rating is required"]
    },
    playTime: {
        type: Number,
        required: [true, "Play time is required"]
    },
    thoughts: {
        type: String,
        required: [true, "Thoughts are required"]
    }
})

const Review = model('Review', reviewSchema);

export default Review;