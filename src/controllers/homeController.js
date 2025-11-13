import { Router } from "express";

const homeController = Router();

homeController.get('/', async (req, res) => {
    res.render('home');
})

homeController.get('/about', (req, res) => {
    res.render('about');
})

homeController.get('/profile', (req, res) => {
    res.render('profile')
})

export default homeController