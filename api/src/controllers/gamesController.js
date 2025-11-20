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

    res.render('games/catalogue', { games, filter });
})

gamesController.get('/create', isAuth, (req, res) => {
    const genres = getGenreViewData();
    res.render('games/create', { genres })
})

gamesController.post('/create', isAuth, async (req, res) => {
    const gameData = req.body;
    const userId = req.user?.id;

    try {
        await gamesService.createGame(gameData, userId);
        res.redirect('/games')
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        const genres = getGenreViewData(gameData.genre);
        res.status(400).render('games/create', { game: gameData, genres, error: errorMessage })
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

    res.render('games/catalogue', { games, filter });
})

gamesController.get('/:gameId/details', async (req, res) => {
    const gameId = req.params.gameId;


    try {
        const game = await gamesService.getOneGame(gameId);
        const reviews = await reviewService.getGameReviews(gameId);

        let gameRating = 0;
        let gameLength = 0;

        if (reviews.length > 0) {
            reviews.forEach(review => {
                gameRating += review.rating;
                gameLength += review.playTime;
            })

            gameRating = (gameRating / reviews.length).toFixed(1);
            gameLength = (gameLength / reviews.length).toFixed(1);
        }

        let isOwner = false;

        if (game.ownerId.equals(req.user?.id)) {
            isOwner = true;
        }

        let hasReviewed = false;

        if (reviews.some(review => review.user.equals(req.user?.id))) {
            hasReviewed = true;
        }

        res.render('games/details', { game, gameLength, gameRating, reviews, hasReviewed, isOwner })
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        res.status(404).render('404', { error: errorMessage });
    }
})

gamesController.get('/:gameId/edit', isAuth, async (req, res) => {
    const gameId = req.params.gameId;
    const gameData = await gamesService.getOneGame(gameId);

    try {
        if (!gameData.ownerId.equals(req.user?.id)) {
            throw new Error('Only the game creator can edit it')
        }

        const genres = getGenreViewData(gameData.genre)

        res.render('games/edit', { game: gameData, genres })
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        res.status(401).render('404', {error: errorMessage})
    }


})

gamesController.post('/:gameId/edit', isAuth, async (req, res) => {
    const gameId = req.params.gameId;
    const newData = req.body;

    try {
        await gamesService.editGame(gameId, newData);
        res.redirect(`/games/${gameId}/details`);
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        res.status(400).render('404', { error: errorMessage });
    }
})

gamesController.get('/:gameId/delete', isAuth, async (req, res) => {
    const gameId = req.params.gameId;
    const gameData = await gamesService.getOneGame(gameId);

    try {
        if (!gameData.ownerId.equals(req.user?.id)) {
            throw new Error('Only the game creator can delete it')
        }

        await reviewService.deleteReviewsForGame(gameId);
        await gamesService.deleteGame(gameId);
        res.redirect('/games');
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        res.status(400).render('404', { error: errorMessage });
    }
})

export default gamesController