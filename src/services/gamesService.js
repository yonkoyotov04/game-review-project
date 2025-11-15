import Game from "../models/Game.js"

export default {
    getAllGames() {
        return Game.find().select({title: true, imageUrl: true});
    },
    getOneGame(id) {
        return Game.findById(id).populate('reviews');
    },
    createGame(gameData) {
        return Game.create({rating: 0, length: 0, ...gameData});
    }
}