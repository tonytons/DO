const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

// Inscription d'un nouvel utilisateur
router.post('/register', userController.registerUser);

// Connexion d'un utilisateur
router.post('/login', userController.loginUser);

// Récupérer le profil de l'utilisateur
router.get('/profile', userController.getUserProfile);

// Mettre à jour le profil de l'utilisateur
router.put('/profile', userController.updateUserProfile);

module.exports = router;
