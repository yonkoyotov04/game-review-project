import { Router } from "express";
import authService from "../services/authService.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const authController = Router();

authController.get('/login', (req, res) => {
    res.render('auth/login');
})

authController.get('/register', (req, res) => {
    res.render('auth/register');
})

authController.post('/register', async(req, res) => {
    const userData = req.body;

    try {
        const token = await authService.register(userData);
        res.cookie('auth', token);
        res.redirect('/');
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        res.status(401).render('auth/register', {error: errorMessage, 
            email: userData.email, 
            bio: userData.bio, 
            profilePic: userData.profilePic});
    }
})

authController.post('/login', async(req, res) => {
    const {email, password} = req.body;

    try {
        const token = await authService.login(email, password);

        res.cookie('auth', token);
        res.redirect('/');
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        res.status(401).render('auth/login', {error: errorMessage, email: email})
    }

    
})

authController.get('/logout', (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
})

export default authController;