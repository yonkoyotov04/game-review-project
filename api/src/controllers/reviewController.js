import { Router } from "express";
import reviewService from "../services/reviewService.js";
import { getErrorMessage } from "../utils/errorUtils.js";
import { isAuth } from "../middlewares/authMiddleware.js";

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

reviewController.get('/:reviewId/edit', isAuth, async(req, res) => {
    const reviewId = req.params.reviewId;

    const review = await reviewService.getReviewById(reviewId);

    res.render('reviews/edit', {review})
})

reviewController.post('/:reviewId/edit', isAuth, async(req, res) => {
    const reviewId = req.params.reviewId;
    const user = req.user?.id;
    const formData = req.body;
    const game = (await reviewService.getReviewById(reviewId)).game;

    try {
        const newReview = { game, user, ...formData };
        await reviewService.editReview(reviewId, newReview);
        res.redirect(`/auth/${user}/profile`);
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        res.status(401).render('404', {error: errorMessage});
    }
})

reviewController.get('/:reviewId/delete', isAuth, async(req, res) => {
    const reviewId = req.params.reviewId;

    try {
        await reviewService.deleteOneReview(reviewId);
        res.redirect('/');
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        res.status(401).render('404', {error: errorMessage});
    }
})

export default reviewController;