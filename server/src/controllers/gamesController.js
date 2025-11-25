import { Router } from "express";
import gamesService from "../services/gamesService.js";
import reviewService from "../services/reviewService.js"
import { getErrorMessage } from "../utils/errorUtils.js";

const gamesController = Router();

gamesController.get('/', async (req, res) => {
    const filter = req.query;
    const games = await gamesService.getAllGames(filter);

    res.json(games ?? []);
})

gamesController.post('/', async (req, res) => {
    const gameData = req.body;
    const userId = req.user?.id;

    try {
       const game = await gamesService.createGame(gameData, userId);
       res.json(game ?? {});
    } catch (error) {
        res.status(400).json({ message: getErrorMessage(error) })
    }
})

gamesController.get('/:gameId/details', async (req, res) => {
    const gameId = req.params.gameId;

    try {
        const game = await gamesService.getOneGame(gameId);

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

gamesController.delete('/:gameId/delete', async (req, res) => {
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