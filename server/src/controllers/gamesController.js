import { Router } from "express";
import { isAuth } from "../middlewares/authMiddleware.js";
import gamesService from "../services/gamesService.js";
import reviewService from "../services/reviewService.js"
import { getErrorMessage } from "../utils/errorUtils.js";
import getGenreViewData from "../utils/generalUtils.js";

const gamesController = Router();

gamesController.get('/', async (req, res) => {
    const filter = req.query;
    const games = await gamesService.getAllGames(filter);

    res.json(games ?? []);
})

gamesController.post('/create', async (req, res) => {
    const gameData = req.body;
    const userId = req.user?.id;

    try {
        await gamesService.createGame(gameData, userId);
    } catch (error) {
        res.status(400).json({ message: getErrorMessage(error) })
    }
})

gamesController.get('/:category', async (req, res) => {
    let category = req.params.category;
    let filter = req.query;

    if (['rpg', 'fps', 'mmo'].includes(category)) {
        category = category.toUpperCase();
    } else {
        category = category[0].toUpperCase() + category.slice(1);
    }

    const games = await gamesService.getByCategory(category, filter);

    res.json(games ?? []);
})

gamesController.get('/:gameId/details', async (req, res) => {
    const gameId = req.params.gameId;

    try {
        const game = await gamesService.getOneGame(gameId);
        // const reviews = await reviewService.getGameReviews(gameId);

        // let gameRating = 0;
        // let gameLength = 0;

        // if (reviews.length > 0) {
        //     reviews.forEach(review => {
        //         gameRating += review.rating;
        //         gameLength += review.playTime;
        //     })

        //     gameRating = (gameRating / reviews.length).toFixed(1);
        //     gameLength = (gameLength / reviews.length).toFixed(1);
        // }

        res.json(game ?? {});
    } catch (error) {
        res.status(400).json({ messages: getErrorMessage(error) })
    }
})

gamesController.put('/:gameId/edit', async (req, res) => {
    const gameId = req.params.gameId;
    const newData = req.body;

    try {
        await gamesService.editGame(gameId, newData);
    } catch (error) {
        res.status(400).json({ message: getErrorMessage(error) });
    }
})

gamesController.delete('/:gameId/delete', isAuth, async (req, res) => {
    const gameId = req.params.gameId;
    const gameData = await gamesService.getOneGame(gameId);

    try {
        if (!gameData.ownerId.equals(req.user?.id)) {
            throw new Error('Only the game creator can delete it')
        }

        await reviewService.deleteReviewsForGame(gameId);
        await gamesService.deleteGame(gameId);
    } catch (error) {
        res.status(400).json({message: getErrorMessage(error)});
    }
})

export default gamesController