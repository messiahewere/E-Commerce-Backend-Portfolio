const express = require('express');
const router = express.Router();
const { getAllProducts, 
        createAProduct, 
        deleteAProduct, 
        editAProduct 
      } = require('../controllers/product-controllers');


// Get all products
// GET /api/products
// https://e-commerce-backend-portfolio.onrender.com/api/products

/**
 * @openapi
 * /api/products:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Returns a list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
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
router.route('/').get(getAllProducts);

// Create a product
// POST /api/products/product

/**
 * @openapi
 * /api/products/product:
 *   post:
 *     summary: Create a product (Admin only)
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     requestBody: 
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProductInput'
 *     responses:
 *       201:
 *         description: Product created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
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
router.route('/product').post(createAProduct);

// Delete a product
// DELETE /api/products/:id

/**
 * @openapi
 * /api/products/{id}:
 *   delete:
 *     summary: Delete a product (Admin only)
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Product ID
 *     responses:
 *       200:
 *         description: Product deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Product deleted successfully
 *       404:
 *         description: Product not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Product not found
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
router.route('/:id').delete(deleteAProduct);

// Edit a product
// EDIT /api/products/:id

/**
 * @openapi
 * /api/products/{id}:
 *   put:
 *     summary: Update a product (Admin only)
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Product ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProductInput'
 *     responses:
 *       201:
 *         description: Product updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Product not found
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
router.route('/:id').put(editAProduct);

/**
 * @openapi
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: Product ID
 *         title:
 *           type: string
 *           description: Product title
 *         description:
 *           type: string
 *           description: Product description
 *         price:
 *           type: number
 *           minimum: 0
 *           description: Product price
 *         category:
 *           type: string
 *           description: Product category
 *         brand:
 *           type: string
 *           description: Product brand
 *         rating:
 *           type: number
 *           minimum: 0
 *           maximum: 5
 *           default: 0
 *           description: Product rating
 *         stock:
 *           type: number
 *           minimum: 0
 *           default: 0
 *           description: Product stock quantity
 *         images:
 *           type: array
 *           items:
 *             type: string
 *           description: Product images URLs
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *     ProductInput:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - price
 *         - category
 *         - brand
 *       properties:
 *         title:
 *           type: string
 *           description: Product title (must be unique)
 *         description:
 *           type: string
 *           description: Product description
 *         price:
 *           type: number
 *           minimum: 0
 *           description: Product price
 *         category:
 *           type: string
 *           description: Product category
 *         brand:
 *           type: string
 *           description: Product brand
 *         rating:
 *           type: number
 *           minimum: 0
 *           maximum: 5
 *           default: 0
 *           description: Product rating
 *         stock:
 *           type: number
 *           minimum: 0
 *           default: 0
 *           description: Product stock quantity
 *         images:
 *           type: array
 *           items:
 *             type: string
 *           description: Product images URLs
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

module.exports = router;