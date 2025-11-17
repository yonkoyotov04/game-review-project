import { Router } from "express";
import reviewService from "../services/reviewService.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const reviewController = Router();

reviewController.get('/:gameId/create', (req, res) => {
    res.render('reviews/create');
})

reviewController.post('/:gameId/create', async (req, res) => {
    const gameId = req.params.gameId;
    const userId = req.user.id;
    const formData = req.body;

    try {
        const reviewData = { gameId, userId, ...formData };
        const review = await reviewService.reviewGame(reviewData);
        await reviewService.attachToGame(gameId, review.id);
        res.redirect(`/games/${gameId}/details`);
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        res.status(400).render('reviews/create', {error: errorMessage, review: formData});
    }

})

export default reviewController;