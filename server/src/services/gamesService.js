import Game from "../models/Game.js"
import Review from "../models/Review.js";

export default {
    getAllGames(filter = {}) {
        let query = Game.find().select({title: true, imageUrl: true, id: true, reviewsCount: true})

        if (filter.title) {
            query.find({ title: { $regex: filter.title, $options: 'i' } });
        }

        if (filter.genre) {
            query.find({ genre: { $regex: filter.genre, $options: 'i' } })
        }

        if (filter.developers) {
            query.find({ developers: { $regex: filter.developers, $options: 'i' } })
        }

        if (filter.platforms) {
            console.log(filter.platforms);
            query.find({ platforms: { $regex: filter.platforms, $options: 'i' } })
        }

        return query;
    },
    async getOneGame(id) {
        const game = await Game.findById(id);
        const reviews = await Review.find({ game: game.id }).select({ id: true });

        if (reviews.length === game.reviewsCount) {
            return game;
        }

        const newData = {
            id: game.id, title: game.title, developers: game.developers,
            genre: game.genre, relDate: game.relDate, platforms: game.platforms, description: game.description,
            imageUrl: game.imageUrl, reviewsCount: reviews.length
        };

        return Game.findByIdAndUpdate(game.id, newData);
    },
    createGame(gameData, creatorId) {
        return Game.create({ reviewsCount: 0, ownerId: creatorId, ...gameData });
    },
    editGame(gameId, newData) {
        return Game.findByIdAndUpdate(gameId, newData, { runValidators: true });
    },
    deleteGame(gameId) {
        return Game.findByIdAndDelete(gameId);
    }
}