const express = require('express');
const router = express.Router();
const {validator} = require('../middleware/auth-handler')
const {registerUser, loginUser, validUser} = require('../controllers/auth-controllers');

// register user
// https://e-commerce-backend-portfolio.onrender.com
// PUT /api/auth/register
router.post('/register', registerUser);

// login user
// https://e-commerce-backend-portfolio.onrender.com
// POST /api/auth/login
router.post('/login', loginUser);

router.post('/check', validator, validUser);

module.exports = router;