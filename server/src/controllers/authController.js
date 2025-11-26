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
        res.status(401).end();
    }
})

authController.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await authService.login(email, password);
        res.status(201).json(token);
    } catch (error) {
        res.status(401).json({ message: getErrorMessage(error) })
    }


})

authController.get('/logout', (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
})

authController.get('/:userId/profile', async (req, res) => {
    const userId = req.params.userId;
    const profileData = await authService.getProfileData(userId);
    // const reviews = await reviewService.getUserReviews(userId);
    
    res.status(201).json(profileData)
})

authController.put('/profile/edit', async (req, res) => {
    const userId = req.user?.id;
    const newData = req.body;

    try {
        await authService.editProfile(userId, newData);

    } catch (error) {
        res.status(401).json({ message: getErrorMessage(error) });
    }
})

authController.delete('/profile/delete', async (req, res) => {
    const userId = req.user.id;

    try {
        await reviewService.deleteReviewsForUser(userId);
        await authService.deleteProfile(userId);
    } catch (error) {
        res.status(401).json({ message: getErrorMessage(error) })
    }
})

export default authController;