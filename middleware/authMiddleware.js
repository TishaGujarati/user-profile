// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const passport = require('passport');
require('dotenv').config();
const jwtSecret = process.env.JWT_SECRET; 

const isAuthenticated = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        console.log('No token found in headers');
        return res.status(401).json({ message: 'Authentication required' });
    }

    // Verify the JWT token
    jwt.verify(token.replace('Bearer ', ''), jwtSecret, (err, decoded) => {
        if (err) {
            console.log('JWT verification failed:', err);
            return res.status(401).json({ message: 'Invalid token' });
        }

        req.user = decoded; 

        next();
    });
};

module.exports = {
    isAuthenticated,
};
