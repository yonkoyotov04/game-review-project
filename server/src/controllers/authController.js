import { Router } from "express";
import authService from "../services/authService.js";
import { getErrorMessage } from "../utils/errorUtils.js";
import reviewService from "../services/reviewService.js";

const authController = Router();

authController.post('/register', async (req, res) => {
    const userData = req.body;

    try {
        const token = await authService.register(userData);
        res.status(201).json(token);
    } catch (error) {
        res.statusMessage = getErrorMessage(error);
        res.status(400).end();
    }
})

authController.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await authService.login(email, password);
        res.status(201).json(token);
    } catch (error) {
        res.statusMessage = getErrorMessage(error);
        res.status(401).end();
    }
})

authController.get('/logout', (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
})

authController.get('/:userId/profile', async (req, res) => {
    const userId = req.params.userId;
    const profileData = await authService.getProfileData(userId);

    res.status(201).json(profileData)
})

authController.put('/profile/:userId/edit', async (req, res) => {
    const userId = req.params.userId;
    const newData = req.body;

    try {
        await authService.editProfile(userId, newData);
        res.json({});
    } catch (error) {
        res.statusMessage = getErrorMessage(error);
        res.status(400).end();
    }
})

authController.delete('/profile/delete', async (req, res) => {
    const userId = req.user.id;

    try {
        await reviewService.deleteReviewsForUser(userId);
        await authService.deleteProfile(userId);
    } catch (error) {
        res.statusMessage = getErrorMessage(error);
        res.status(401).end();
    }
})

export default authController;