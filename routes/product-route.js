const express = require('express');
const router = express.Router();
const { getAllProducts, 
        createAProduct, 
        deleteAProduct, 
        editAProduct 
      } = require('../contollers/product-controllers');


// Get all products
// GET /api/products
/**
 * @openapi
 * /api/products:
 *   get:
 *     summary: Get all products
 *     responses:
 *       200:
 *         description: Returns a list of products
 */
router.route('/').get(getAllProducts);

// Create a product
// POST /api/products/product

/**
 * @openapi
 * /api/products/product:
 *   post:
 *     summary: Create a product
 *     responses:
 *       201:
 *         description: Returns a product object that was created
 */
router.route('/product').post(createAProduct);

// Delete a product
// DELETE /api/products/:id

/**
 * @openapi
 * /api/products/:id:
 *   delete:
 *     summary: Delete a product
 *     responses:
 *       200:
 *         description: Returns a message confirming deletion
 */
router.route('/:id').delete(deleteAProduct);

// Edit a product
// EDIT /api/products/:id

/**
 * @openapi
 * /api/products/:id:
 *   put:
 *     summary: Update a product
 *     responses:
 *       201:
 *         description: Returns a product object that was updated
 */
router.route('/:id').put(editAProduct);

module.exports = router;