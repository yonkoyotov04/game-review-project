import Game from "../models/Game.js"

export default {
    getAllGames() {
        return Game.find().select({title: true, imageUrl: true, reviews: true, id: true});
    },
    getOneGame(id) {
        return Game.findById(id).populate('reviews');
    },
    getMostPopular() {
        return Game.find().select({title: true, imageUrl: true, reviews: true, id: true}).limit(12);
    },
    createGame(gameData) {
        return Game.create({rating: 0, length: 0, ...gameData});
    }
}