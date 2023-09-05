const userService = require('../services/userService');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const jwtSecret = process.env.JWT_SECRET;

async function createUser(req, res, next) {
    try {
        const user = await userService.createUser(req.body);
        const token = jwt.sign({ sub: user.id }, jwtSecret, {
            expiresIn: '1h', 
        });
        res.status(201).json({ user, token });
    } catch (error) {
        next(error);
    }
}

async function getAllUsers(req, res, next) {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}

async function deleteUser(req, res, next) {
    const userId = req.params.id;
    try {
        await userService.deleteUser(userId);
        res.status(204).send();
    } catch (error) {
        next(error);
    }
}

async function updateUser(req, res, next) {
    const userId = req.params.id;
    try {
        const user = await userService.updateUser(userId, req.body);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createUser,
    getAllUsers,
    deleteUser,
    updateUser,
};
