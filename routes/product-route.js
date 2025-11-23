const express = require('express');
const router = express.Router();
const { getAllProducts, 
        createAProduct, 
        deleteAProduct, 
        editAProduct 
      } = require('../contollers/product-controllers');


// Get all products
// GET /api/products
router.route('/').get(getAllProducts);

// Create a product
// POST /api/products/product
router.route('/product').post(createAProduct);

// Delete a product
// DELETE /api/products/:id
router.route('/:id').delete(deleteAProduct);

// Edit a product
// EDIT /api/products/:id
router.route('/:id').put(editAProduct);

module.exports = router;