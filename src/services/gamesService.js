import Game from "../models/Game.js"

export default {
    getAllGames(filter = {}) {
        let query = Game.find().select({title: true, imageUrl: true, id: true})

        if (filter.genre) {
            query.find({genre: filter.genre})
        }

        if (filter.title) {
            query.find({title: { $regex: filter.title, $options:'i' }});
        }

        return query;
    },
    getOneGame(id) {
        return Game.findById(id)
    },
    createGame(gameData) {
        return Game.create({rating: 0, length: 0, ...gameData});
    },
    editGame(gameId, newData) {
        return Game.findByIdAndUpdate(gameId, newData, {runValidators: true});
    },
    deleteGame(gameId) {
        return Game.findByIdAndDelete(gameId);
    }
}