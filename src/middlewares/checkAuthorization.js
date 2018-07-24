const jwt = require('jsonwebtoken');
const {JWT_KEY} = require('../config/env');

module.exports = (req, res, next) => {
    try {
        const api_token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(api_token, JWT_KEY);

        req.userData = decoded;
        next();
    } catch (error) {
        return res.status(401).json({error: "You are not authorized"});
    }
}
