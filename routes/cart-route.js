const express = require('express');
const router = express.Router();
const {createCart, getCart} = require('../controllers/cart-controller');
const { validator } = require('../middleware/auth-handler');

// applying the validator middleware to authenticate users before placing order
router.use(validator);

// Create an order for posting to the Order page when you place an order after selection
// POST /api/cart
// https://e-commerce-backend-portfolio.onrender.com/api/cart

/**
 * @openapi
 * /api/cart:
 *   post:
 *     summary: Create cart item
 *     tags: [Cart]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CartInput'
 *     responses:
 *       201:
 *         description: Cart item created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cart'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Invalid product or quantity
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Access denied
 *       500:
 *         description: Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Server Error
 */
router.route('/').post(createCart);

// Read the individual orders on the order page based on how they were selected
// GET /api/cart
// https://e-commerce-backend-portfolio.onrender.com/api/cart

/**
 * @openapi
 * /api/cart:
 *   get:
 *     summary: Get user's cart items
 *     tags: [Cart]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Cart items retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cart'
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Access denied
 *       500:
 *         description: Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Server Error
 */
router.route('/').get(getCart);








module.exports = router;

/**
 * @openapi
 * components:
 *   schemas:
 *     CartInput:
 *       type: object
 *       required:
 *         - productId
 *         - quantity
 *       properties:
 *         productId:
 *           type: string
 *           description: Product ID to add to cart
 *         quantity:
 *           type: number
 *           minimum: 1
 *           description: Quantity of the product
 *     Cart:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: Cart item ID
 *         userId:
 *           type: string
 *           description: User ID who owns the cart
 *         productId:
 *           type: string
 *           description: Product ID in the cart
 *         quantity:
 *           type: number
 *           description: Quantity of the product
 *         product:
 *           $ref: '#/components/schemas/Product'
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */