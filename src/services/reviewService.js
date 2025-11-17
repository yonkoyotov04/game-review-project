import Review from "../models/Review.js"

export default {
    reviewGame(reviewData) {
        return Review.create(reviewData);
    },
    
    getGameReviews(gameId) {
        return Review.find({game: gameId}).populate({path: 'user', select: 'username profilePic'});
    },

    getUserReviews(userId) {
        return Review.find({user: userId}).populate({path: 'game', select: 'title imageUrl'});
    },

    deleteReviewsForGame(gameId) {
        return Review.deleteMany({game: gameId});
    },

    deleteReviewsForUser(userId) {
        return Review.deleteMany({user: userId});
    }
}