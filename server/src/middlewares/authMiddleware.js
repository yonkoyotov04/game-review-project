import jwt from 'jsonwebtoken';
import JWT_SECRET from "../config/constants.js";

export default function authMiddleware(req, res, next) {
    const token = req.header('X-Authorization');

    if (!token) {
        return next();
    }

    try {
        const decodedToken = jwt.verify(token, JWT_SECRET);

        req.user = decodedToken;
        req.isAuthenticated = true;

        next();
    } catch (error) {
        res.statusMessage = "Invalid User!";
        res.status(401).end();
    }
}

export function isAuth(req, res, next) {
    if (!req.isAuthenticated) {
        throw new Error("Please log in first!")
    }

    next();
}

export function isGuest(req, res, next) {
    if (req.isAuthenticated) {
        throw new Error("You're already logged in!");
    }

    next();
}
