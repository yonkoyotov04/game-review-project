import { Router } from "express";
import reviewService from "../services/reviewService.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const reviewController = Router();

reviewController.get('/:gameId/review', (req, res) => {
    res.render('reviews/create');
})

reviewController.post('/:gameId/review', async (req, res) => {
    const game = req.params.gameId;
    const user = req.user.id;
    const formData = req.body;

    try {
        const reviewData = { game, user, ...formData };
        await reviewService.reviewGame(reviewData);
        res.redirect(`/games/${game}/details`);
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        res.status(400).render('reviews/create', {error: errorMessage, review: formData});
    }

})

reviewController.get('/:reviewId/details', async(req, res) => {
    
})

export default reviewController;