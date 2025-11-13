import { Router } from "express";
import homeController from "./controllers/homeController.js";
import gamesController from "./controllers/gamesController.js";
import authController from "./controllers/authController.js";

const routes = Router();

routes.use(homeController);
routes.use('/games', gamesController);
routes.use('/auth', authController);


export default routes;