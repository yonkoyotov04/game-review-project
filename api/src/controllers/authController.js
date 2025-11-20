import { Router } from "express";
import authService from "../services/authService.js";
import { getErrorMessage } from "../utils/errorUtils.js";
import { isAuth, isGuest } from "../middlewares/authMiddleware.js";
import reviewService from "../services/reviewService.js";

const authController = Router();

authController.get('/login', isGuest, (req, res) => {
    res.render('auth/login');
})

authController.get('/register', isGuest, (req, res) => {
    res.render('auth/register');
})

authController.post('/register', isGuest, async (req, res) => {
    const userData = req.body;

    try {
        const token = await authService.register(userData);
        res.cookie('auth', token);
        res.redirect('/');
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        res.status(401).render('auth/register', {
            error: errorMessage,
            email: userData.email,
            username: userData.username,
            bio: userData.bio,
            profilePic: userData.profilePic
        });
    }
})

authController.post('/login', isGuest, async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await authService.login(email, password);

        res.cookie('auth', token);
        res.redirect('/');
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        res.status(401).render('auth/login', { error: errorMessage, email: email })
    }


})

authController.get('/logout', isAuth, (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
})

authController.get('/:userId/profile', async (req, res) => {
    const userId = req.params.userId;
    const profileData = await authService.getProfileData(userId);
    const reviews = await reviewService.getUserReviews(userId);
    let isOwner = false;

    if (req.user?.id === userId) {
        isOwner = true;
    }

    res.render('auth/profile', { user: profileData, reviews, isOwner })
})

authController.get('/profile/edit', isAuth, async (req, res) => {
    const userId = req.user.id;
    const profileData = await authService.getProfileData(userId);

    res.render('auth/edit', { user: profileData })
})

authController.post('/profile/edit', isAuth, async (req, res) => {
    const userId = req.user.id;
    const newData = req.body;

    try {
        await authService.editProfile(userId, newData);
        res.redirect(`/auth/${userId}/profile`);
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        res.render('auth/edit', { user: newData, error: errorMessage });
    }
})

authController.get('/profile/delete', isAuth, async (req, res) => {
    const userId = req.user.id;

    try {
        await reviewService.deleteReviewsForUser(userId);
        res.clearCookie('auth');
        await authService.deleteProfile(userId);
        res.redirect('/');
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        res.status(401).render('404', {error: errorMessage})
    }


})

export default authController;