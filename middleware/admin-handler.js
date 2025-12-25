const adminHandler = async (req, res, next) => {
    try {
        if (!req.user) {
            return res.status(403).json({message: 'Access denied. Admins only.'});
        }
        
        // Fetch user with role from database
        const Auth = require('../schema/auth-schema');
        const user = await Auth.findById(req.user.userId);
        
        if (user && user.role === 'admin') {
            next();
        } else {
            res.status(403).json({message: 'Access denied. Admins only.'});
        }
    } catch (error) {
        console.error('Admin handler error:', error);
        res.status(500).json({message: 'Server error', error: error.message});
    }
}

module.exports = {adminHandler};