import { Router } from "express";
import { isAuth } from "../middlewares/authMiddleware.js";
import gamesService from "../services/gamesService.js";
import { getErrorMessage } from "../utils/errorUtils.js";
import getGenreViewData from "../utils/generalUtils.js";

const gamesController = Router();

gamesController.get('/', async (req, res) => {
    const games = await gamesService.getAllGames();
    res.render('games/catalogue', {games});
})

gamesController.get('/create', isAuth, (req, res) => {
    const genres = getGenreViewData();
    console.log(genres);
    res.render('games/create', {genres});
})

gamesController.post('/create', isAuth, async(req, res) => {
    const gameData = req.body;

    try {
        await gamesService.createGame(gameData);
        res.redirect('/games')
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        const genres = getGenreViewData(gameData.genre);
        res.status(400).render('games/create', {game: gameData, genres, error: errorMessage})
    }
})

export default gamesController