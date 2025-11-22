import User from "../models/User.js"
import { generateAuthToken } from "../utils/tokenUtils.js";
import bcrypt from 'bcrypt'


export default {
    async register(userData) {
        const userExists = await User.exists({email: userData.email});

        if (userExists) {
            throw new Error("User already exists!");
        }

        if (userData.password !== userData.rePassword) {
            throw new Error("Password mismatch!");
        }

        const user = await User.create(userData);

        const token = generateAuthToken(user);

        return {
            _id: user.id,
            email: user.email,
            accessToken: token
        };
    },

    async login(email, password) {
        const user = await User.findOne({email});

        if (!user) {
            throw new Error('Invalid email or password!');
        }

        const passwordIsValid = await bcrypt.compare(password, user.password);

        if (!passwordIsValid) {
            throw new Error("Invalid email or password!");
        }

        const token = generateAuthToken(user);

        return {
            _id: user.id,
            email: user.email,
            accessToken: token
        };
    },

    getProfileData(id) {
        return User.findById(id).select({username: true, bio: true, profilePic: true});
    },

    editProfile(userId, newData) {
        return User.findByIdAndUpdate(userId, newData, {runValidators: true});
    },

    deleteProfile(userId) {
        return User.findByIdAndDelete(userId);
    }
}