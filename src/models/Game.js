import { Schema, model, Types } from "mongoose";

const gameSchema = new Schema({
    title: {
        type: String,
        required: [true, "A game title is required"],
    },
    developers: {
        type: String,
        required: [true, "A game director is required"]
    },
    genre: {
        type: String,
        required: [true, "A genre is required"]
    },
    relDate: {
        type: String,
        required: [true, "A release date is required"]
    },
    platforms: {
        type: String,
        required: [true, "A platform is required"]
    },
    description: {
        type: String,
        required: [true, "A description is required"]
    },
    imageUrl: {
        type: String,
        required: [true, "An image is required"]
    },
    rating: {
        type: String
    },
    length: {
        type: String
    }
})

const Game = model("Game", gameSchema)

export default Game;