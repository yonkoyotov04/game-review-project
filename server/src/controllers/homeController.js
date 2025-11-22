import { Router } from "express";
import gamesService from "../services/gamesService.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const homeController = Router();

homeController.get('/', async (req, res) => {
    try {
        let games = await gamesService.getAllGames();
        games = games.sort((a, b) => b.reviewsCount - a.reviewsCount);
        games = games.slice(0, 12);

        res.json(games ?? []);
    } catch (error) {
        res.status(404).json({ message: getErrorMessage(error) })
    }
})

export default homeController