import { Router } from "express";
import reviewService from "../services/reviewService.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const reviewController = Router();

reviewController.get('/game/:gameId', async (req, res) => {
    const gameId = req.params.gameId;

    const reviews = await reviewService.getGameReviews(gameId);

    res.json(reviews ?? []);
})

reviewController.get('/user/:userId', async (req, res) => {
    const userId = req.params.userId;

    const reviews = await reviewService.getUserReviews(userId);

    res.json(reviews ?? []);
})

reviewController.get('/:reviewId', async (req, res) => {
    const reviewId = req.params.reviewId;

    try {
        const review = await reviewService.getReviewById(reviewId);

        res.json(review ?? {});
    } catch (error) {
        res.statusMessage = getErrorMessage(error);
        res.status(400).end();
    }
})

reviewController.post('/:gameId', async (req, res) => {
    const game = req.params.gameId;
    const user = req.user?.id;
    const formData = req.body;

    try {
        const reviewData = { game, user, ...formData };
        const review = await reviewService.reviewGame(reviewData);
        res.json(review ?? {});
    } catch (error) {
        res.statusMessage = getErrorMessage(error);
        res.status(400).end();
    }
})

reviewController.put('/:reviewId/edit', async (req, res) => {
    const reviewId = req.params.reviewId;
    const user = req.user?.id;
    const formData = req.body;
    const game = (await reviewService.getReviewById(reviewId)).game;

    try {
        const newReview = { game, user, ...formData };
        await reviewService.editReview(reviewId, newReview);
        res.json({});
    } catch (error) {
        res.statusMessage = getErrorMessage(error);
        res.status(400).end();
    }
})

reviewController.delete('/:reviewId/delete', async (req, res) => {
    const reviewId = req.params.reviewId;

    try {
        await reviewService.deleteOneReview(reviewId);
    } catch (error) {
        res.statusMessage = getErrorMessage(error);
        res.status(400).end();
    }
})

export default reviewController;