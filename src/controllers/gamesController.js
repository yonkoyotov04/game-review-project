import { Router } from "express";

const gamesController = Router();

gamesController.get('/', async (req, res) => {
    res.render('games/catalogue');
})

export default gamesController