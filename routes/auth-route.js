const express = require('express');
const router = express.Router();
const {registerUser, loginUser} = require('../contollers/auth-controllers');

// register user
// PUT /api/auth/register
router.post('/register', registerUser);

// login user
// POST /api/auth/login
router.post('/login', loginUser);



module.exports = router;














module.exports = router;