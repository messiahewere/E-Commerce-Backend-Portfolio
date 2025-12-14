const express = require('express');
const router = express.Router();
const {registerUser, loginUser} = require('../controllers/auth-controllers');


// register user
// https://e-commerce-backend-portfolio.onrender.com
// PUT /api/auth/register
router.post('/register', registerUser);

// login user
// https://e-commerce-backend-portfolio.onrender.com
// POST /api/auth/login
router.post('/login', loginUser);


module.exports = router;