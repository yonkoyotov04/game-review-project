import { Schema, Model, Types, model } from "mongoose";
import bcrypt from 'bcrypt'

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, "An email is required"]
    },
    username: {
        type: String,
        required: [true, "A username is required"]
    },
    password: {
        type: String,
        required: [true, "A password is required"]
    },
    bio: {
        type: String,
        required: false
    },
    profilePic: {
        type: String,
        required: [true, "A profile picture is required"]
    },
    reviews: [{
        type: Types.ObjectId,
        ref: "Reviews"
    }]
})

userSchema.pre('save', async function() {
    this.password = await bcrypt.hash(this.password, 12);
})

const User = model('User', userSchema);

export default User;