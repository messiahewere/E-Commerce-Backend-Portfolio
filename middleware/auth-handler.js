const jwt = require('jsonwebtoken');
require('dotenv').config();


const validator = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(authHeader && authHeader.startsWith('Bearer ')) {
        const token = authHeader.split(' ')[1];
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            if(decoded) {
                req.user = decoded;
                next();
            } else {
                res.status(401).json({message: 'Invalid token'});
            }
            
        } catch (error) {
            res.status(401).json({message: 'Invalid token'});
        }
    } else {
        res.status(401).json({message: 'No token provided'});
    }
}

module.exports = {validator};