import Game from "../models/Game.js"

export default {
    getAllGames(filter = {}) {
        let query = Game.find().select({title: true, imageUrl: true, reviews: true, id: true})

        if (filter.title) {
            query.find({title: { $regex: filter.title, $options:'i' }});
        }

        return query;
    },
    getOneGame(id) {
        return Game.findById(id).populate({path: 'reviews', populate: {path: "user", select: 'username profilePic'}})
    },
    getMostPopular() {
        return Game.find().select({title: true, imageUrl: true, reviews: true, id: true}).limit(12);
    },
    getByCategory(category) {
        return Game.find({genre: category});
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