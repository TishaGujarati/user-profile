const User = require('../models').User;

async function createUser(userData) {
    try {
        const user = await User.create(userData);
        return user;
    } catch (error) {
        throw error;
    }
}

async function getAllUsers() {
    try {
        const users = await User.findAll();
        return users;
    } catch (error) {
        throw error;
    }
}

async function deleteUser(userId) {
    try {
        const user = await User.findByPk(userId);
        if (!user) {
            throw new Error('User not found');
        }
        await user.destroy();
    } catch (error) {
        throw error;
    }
}

async function updateUser(userId, userData) {
    try {
        const user = await User.findByPk(userId);
        if (!user) {
            throw new Error('User not found');
        }
        await user.update(userData);
        return user;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createUser,
    getAllUsers,
    deleteUser,
    updateUser,
};
