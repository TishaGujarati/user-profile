const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const passport = require('passport');
const authMiddleware = require('../middleware/authMiddleware');

// CREATE USER
router.post('/register', userController.createUser);

// GET USSER
router.get('/users', authMiddleware.isAuthenticated, userController.getAllUsers);

// DELETE USER
router.delete('/users/:id', authMiddleware.isAuthenticated, userController.deleteUser);

// UPDATE USER
router.put('/users/:id', authMiddleware.isAuthenticated, userController.updateUser);

module.exports = router;
