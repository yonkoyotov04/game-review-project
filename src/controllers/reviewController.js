import { Router } from "express";
import reviewService from "../services/reviewService.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const reviewController = Router();

reviewController.get('/:gameId/create', (req, res) => {
    res.render('reviews/create');
})

reviewController.post('/:gameId/create', async (req, res) => {
    const game = req.params.gameId;
    const user = req.user.id;
    const formData = req.body;

    try {
        const reviewData = { game, user, ...formData };
        const review = await reviewService.reviewGame(reviewData);
        await reviewService.attachToGame(game, review.id);
        await reviewService.attachToUser(user, review.id);
        res.redirect(`/games/${game}/details`);
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        res.status(400).render('reviews/create', {error: errorMessage, review: formData});
    }

})

export default reviewController;