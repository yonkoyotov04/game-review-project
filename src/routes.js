import { Router } from "express";
import homeController from "./controllers/homeController.js";
import gamesController from "./controllers/gamesController.js";

const routes = Router();

routes.use(homeController);
routes.use('/games', gamesController);


export default routes;