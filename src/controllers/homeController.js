import { Router } from "express";
import gamesService from "../services/gamesService.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const homeController = Router();

homeController.get('/', async (req, res) => {
    try {
        let games = await gamesService.getAllGames();
        games = games.sort((a, b) => b.reviews?.length - a.reviews?.length);
        games = games.slice(0, 11);
        res.render('home', {games});
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        res.status(404).render('home', {error: errorMessage})
    }
})

homeController.get('/about', (req, res) => {
    res.render('about');
})



export default homeController