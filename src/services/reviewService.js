import Game from "../models/Game.js";
import Review from "../models/Review.js"
import User from "../models/User.js";

export default {
    reviewGame(reviewData) {
        return Review.create(reviewData);
    },
    
    attachToGame(gameId, reviewId) {
        return Game.findByIdAndUpdate(gameId, {$push: {reviews: reviewId}});
    },

    attachToUser(userId, reviewId) {
        return User.findByIdAndUpdate(userId, {$push: {reviews: reviewId}});
    }
}