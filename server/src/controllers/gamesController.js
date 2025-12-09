import { Router } from "express";
import gamesService from "../services/gamesService.js";
import reviewService from "../services/reviewService.js"
import { getErrorMessage } from "../utils/errorUtils.js";
import { isAuth } from "../middlewares/authMiddleware.js";

const gamesController = Router();

gamesController.get('/', async (req, res) => {
    const filter = req.query;
    const games = await gamesService.getAllGames(filter);

    res.json(games ?? []);
})

gamesController.post('/', isAuth, async (req, res) => {
    const gameData = req.body;
    const userId = req.user?.id;

    try {
        const game = await gamesService.createGame(gameData, userId);
        res.json(game ?? {});
    } catch (error) {
        res.statusMessage = getErrorMessage(error);
        res.status(400).end();
    }
})

gamesController.get('/:gameId', async (req, res) => {
    const gameId = req.params.gameId;

    try {
        const game = await gamesService.getOneGame(gameId);

        res.json(game ?? {});
    } catch (error) {
        res.statusMessage = getErrorMessage(error);
        res.status(400).end();
    }
})

gamesController.get('/:gameId/status', isAuth, async (req, res) => {
    const gameId = req.params.gameId;
    const gameData = await gamesService.getOneGame(gameId);
    let isOwner = true;
    
    if (!gameData.ownerId.equals(req.user?.id) && !req.isAdmin) {
        isOwner = false;
    }

    return res.json(isOwner);
}) 

gamesController.put('/:gameId', isAuth, async (req, res) => {
    const gameId = req.params.gameId;
    const gameData = await gamesService.getOneGame(gameId);
    const newData = req.body;

    try {
        if (!gameData.ownerId.equals(req.user?.id) && !req.isAdmin) {
            throw new Error('Only the game creator and admin can edit it')
        }

        await gamesService.editGame(gameId, newData);
        res.json({})
    } catch (error) {
        res.statusMessage = getErrorMessage(error);
        res.status(401).end();
    }
})

gamesController.delete('/:gameId', isAuth, async (req, res) => {
    const gameId = req.params.gameId;
    const gameData = await gamesService.getOneGame(gameId);

    try {
        if (!gameData.ownerId.equals(req.user?.id) && !req.isAdmin) {
            throw new Error('Only the game creator and admin can delete it')
        }

        await reviewService.deleteReviewsForGame(gameId);
        await gamesService.deleteGame(gameId);
    } catch (error) {
        res.statusMessage = getErrorMessage(error);
        res.status(401).end();
    }
})

export default gamesController