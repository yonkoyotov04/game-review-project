import { Router } from "express";
import { isAuth } from "../middlewares/authMiddleware.js";

const gamesController = Router();

gamesController.get('/', async (req, res) => {
    res.render('games/catalogue');
})

gamesController.get('/create', isAuth, (req, res) => {
    res.render('games/create');
})

export default gamesController