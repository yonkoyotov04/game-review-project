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
        req.isAdmin = decodedToken.id === '69173291beba34c5fc2f9c04' ? true : false;

        next();
    } catch (error) {
        res.status(401).end();
    }
}

export function isAuth(req, res, next) {
    if (!req.isAuthenticated) {
        return res.status(401);
    }

    next();
}

export function isGuest(req, res, next) {
    if (req.isAuthenticated) {
        return res.status(403);
    }

    next();
}
