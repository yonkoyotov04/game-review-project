import { Router } from "express";
import homeController from "./controllers/homeController.js";
import gamesController from "./controllers/gamesController.js";
import authController from "./controllers/authController.js";
import reviewController from "./controllers/reviewController.js";

const routes = Router();

routes.use(homeController);
routes.use('/games', gamesController);
routes.use('/auth', authController);
routes.use('/reviews', reviewController);

routes.get('/*splat', (req, res) => {
    res.render('404');
})


export default routes;