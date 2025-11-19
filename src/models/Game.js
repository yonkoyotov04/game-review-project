import { Schema, model, Types } from "mongoose";

const gameSchema = new Schema({
    title: {
        type: String,
        required: [true, "A game title is required"],
        minLength: [3, "The game's title is too short"]
    },
    developers: {
        type: String,
        required: [true, "A game director is required"], 
        minLength: [3, "The game's director is too short"]
    },
    genre: {
        type: String,
        required: [true, "A genre is required"],
    },
    relDate: {
        type: String,
        required: [true, "A release date is required"]
    },
    platforms: {
        type: String,
        required: [true, "A platform is required"],
        minLength: [3, "The game's platform is too short"]
    },
    description: {
        type: String,
        required: [true, "A description is required"],
        minLength: [10, "The game's description is too short"]
    },
    imageUrl: {
        type: String,
        required: [true, "An image is required"],
        match: [/^https?:\/\//, "ImageURL is invalid"]
    }
})

const Game = model("Game", gameSchema)

export default Game;