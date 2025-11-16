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

gamesController.get('/:gameId/details', async (req, res) => {
    const gameId = req.params.gameId;
    
    try {
        const game = await gamesService.getOneGame(gameId);
        res.render('games/details', {game})
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        res.status(404).render('404', {error: errorMessage});
    }
})

gamesController.get('/:category', async(req, res) => {
    let category = req.params.category;
    
    if (['rpg', 'fps', 'mmo'].includes(category)) {
        category = category.toUpperCase();
    } else {
        category = category[0].toUpperCase() + category.slice(1);
    }

    const games = await gamesService.getByCategory(category)

    res.render('games/catalogue', {games});
})

export default gamesController