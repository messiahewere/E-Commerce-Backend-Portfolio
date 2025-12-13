const express = require('express');
const router = express.Router();
const {createCart, getCart} = require('../controllers/cart-controller');
const { validator } = require('../middleware/auth-handler');

// applying the validator middleware to authenticate users before placing order
router.use(validator);

// Create an order for posting to the Order page when you place an order after selection
// POST /api/cart
router.route('/').post(createCart);

// Read the individual orders on the order page based on how they were selected
// GET /api/cart
router.route('/').get(getCart);








module.exports = router;