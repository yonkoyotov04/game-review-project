import { Schema, Model, Types, model } from "mongoose";
import bcrypt from 'bcrypt'

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, "An email is required"],
        minLength: [10, "Email is too short"],
        match: [/@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/, "Email is invalid"]
    },
    username: {
        type: String,
        required: [true, "A username is required"],
        minLength: [3, "Your username is too short"]
    },
    password: {
        type: String,
        required: [true, "A password is required"],
        minLength: [6, "Your password is too short"],
        match: [/^[a-zA-Z0-9]+$/, "Your password can only include letters and numbers!"]
    },
    bio: {
        type: String,
        required: false
    },
    profilePic: {
        type: String,
        required: [true, "A profile picture is required"],
        match: [/^https?:\/\//, "Image URL is invalid"]
    }
})

userSchema.pre('save', async function() {
    this.password = await bcrypt.hash(this.password, 12);
})

const User = model('User', userSchema);

export default User;